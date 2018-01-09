import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { FONTS } from '../mock-fonts';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css'],
})

export class FontComponent implements OnInit {
 
  fonts = FONTS;

 
  constructor() { }
 
  ngOnInit() {
  }
 

}
