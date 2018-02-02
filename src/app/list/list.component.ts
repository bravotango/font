import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  filters = "random,dingbat,number,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");

  fonts : Font[];
  constructor(    
    private route: ActivatedRoute,
    private fontService: FontService) { }

  ngOnInit() {
    this.getList();
  }
  getList(): void {

    const string = this.route.snapshot.paramMap.get('char');

    this.fontService.getList(string.toString().toUpperCase())
        .subscribe(fonts => this.fonts = fonts);
  }

  filterFontsByFilter(filter):void {
    this.fontService.getList(filter.toString().toUpperCase())
        .subscribe(fonts => this.fonts = fonts);
  
  }


}
