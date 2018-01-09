import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fonts = FONTS
  
  constructor() { }

  ngOnInit() {
  }

}
