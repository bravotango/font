import { Component, OnInit,ViewChild } from '@angular/core';
import { HtmlCode } from '../htmlCode';
import { HTMLCODES } from '../mock-html-codes';
import { HtmlCodeService } from '../htmlcode.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-htmlcodes',
  templateUrl: './htmlcodes.component.html',
  styleUrls: ['./htmlcodes.component.css'],
  providers: [HtmlCodeService]
})
export class HtmlcodesComponent {

  constructor(private codeService: HtmlCodeService) { }

  displayedColumns = ['code', 'name', 'symbol', 'description'];
  dataSource = new MatTableDataSource(HTMLCODES);
  
  codes = HTMLCODES;

 


  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    console.log ('ngInit - entered')
    this.getCodes();
    console.dir('dataSource - ' + this.dataSource.sort);
  }

  ngAfterViewInit() {
    console.log ('ngAfterViewInit - entered')
    this.dataSource.sort = this.dataSource.sort;
    console.log('this sort=' + this.dataSource.sort)
  }

  getCodes(): void {
    console.log ('getCodes - entered')
    this.codeService.getCodes().subscribe(codes => this.codes = codes);
    console.log('codes : ' + this.codes);
  }

  searchAllCodeFields(event) {
    var string = event.target.value;
    console.log('searchAllCodeFields string= '+ string)

    this.codeService.searchAllCodeFields(string.toString().toUpperCase())
        .subscribe(codes => this.codes = codes);
        console.log(this.codes);
        this.dataSource = new MatTableDataSource(this.codes);
  }

}
export interface Element {
  code: string;
  name: string;
  description: string;
  symbol: string;
}