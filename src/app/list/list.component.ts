import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontService } from '../services/font.service';
import { Font } from '../font';
import { FONTS } from '../mock-fonts';
import { element } from 'protractor';
import { AppInsightsService } from '../services/app-insights.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FontService]
})
export class ListComponent implements OnInit {
  
  filters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
  moreFilters = "random,dingbat,number".split(",");
  
  columns : number;

  fonts : Font[];
  constructor(    
    private route: ActivatedRoute,
    private fontService: FontService,
    private appInsightsService: AppInsightsService
  ) { }
    
  ngOnInit() {
    this.getList();
    this.setNumberOfColumns(window.innerWidth);
  }
  getList(): void {

   // var string = (this.route.snapshot.paramMap.get('char') ? this.route.snapshot.paramMap.get('char') : 'random');
    var string = "random";
    console.log('getList string= '+ string)

    this.fontService.getList(string.toString().toUpperCase())
        .subscribe(fonts => this.fonts = fonts);
  }

  filterFontsByFilter(filter):void {
    this.fontService.getList(filter.toString().toUpperCase())
        .subscribe(fonts => this.fonts = fonts);
  }

  searchFonts(event) {
    var string = event.target.value;
    console.log('searchFonts string= '+ string)

    this.fontService.searchFonts(string.toString().toUpperCase())
        .subscribe(fonts => this.fonts = fonts);
        console.log(this.fonts);
  }

  setNumberOfColumns(width) {

    if (width > 1600) {
      this.columns = 5;
    }

    else if (width < 1601 && width > 1280) {
      this.columns = 4;
    }    

    else if (width < 1280 && width > 992) {
      this.columns = 4;
    }

    else if (width < 993 && width > 767) {
      this.columns = 3;
    }

    else if (width < 768 && width > 400) {
      this.columns = 2;
    }
    else {
      this.columns = 1;
    }
  }
  
  logDownload(fontName){
    this.appInsightsService.logPageEvent('download:' + fontName);
  }

  getWindowSize() {
    const width = window.innerWidth;
    //console.log('innerWidth' + width);
    this.setNumberOfColumns(width);    
  }

}