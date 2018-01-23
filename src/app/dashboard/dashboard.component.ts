import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

filters = "random,dingbat,number,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");

fonts : Font[];
  constructor(private fontService: FontService) { }

  ngOnInit() {
    this.getFonts();
  }
  getFonts(): void {
    this.fontService.getFonts()
        .subscribe(fonts => this.fonts = fonts);
  }
}