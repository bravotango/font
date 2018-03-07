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
export class HtmlcodesComponent implements OnInit {

  constructor(private codeService: HtmlCodeService) { }

  codes = HTMLCODES;
  columns : number;
  displayedColumns = ['code', 'name', 'symbol', 'description'];
  dataSource = new MatTableDataSource(this.codes);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log ('ngInit - entered')
    this.getCodes();
  }

  ngAfterViewInit() {
    console.log ('ngAfterViewInit - entered')
    this.dataSource.sort = this.sort;
    console.log('this sort=' + this.dataSource.sort)
  }

  getCodes(): void {
    console.log ('getCodes - entered')
    this.codeService.getCodes().subscribe(codes => this.codes = codes);
  }

}
