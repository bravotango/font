import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';
import { element } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  filters = "random,dingbat,number,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
  
  columns : number;

  fonts : Font[];
  constructor(    
    private route: ActivatedRoute,
    private fontService: FontService) { }

  ngOnInit() {
    this.getList();
    this.setNumberOfColumns(window.innerWidth);
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




  setNumberOfColumns(element) {
    if (element > 1600) {
      this.columns = 6;
    }

    else if (element < 1601 && element > 1280) {
      this.columns = 5;
    }    

    else if (element < 1280 && element > 1024) {
      this.columns = 4;
    }

    else if (element < 1025 && element > 840) {
      this.columns = 3;
    }

    else if (element < 841 && element > 480) {
      this.columns = 2;
    }
    else {
      this.columns = 1;
    }
  }

  getWindowSize(event) {
    const element = event.target.innerWidth;
    console.log(element);
    this.setNumberOfColumns(element);    
  }
}
