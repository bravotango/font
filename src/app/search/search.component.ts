import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';
import { element } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
