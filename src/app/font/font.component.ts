import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { FONTS } from '../mock-fonts'; // ...and by mock-fonts, these are actually the real fonts

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css'],
})

export class FontComponent implements OnInit {
 
 
  //TODO, maybe?: swap out FONTS with - http://www.btgraphix.com/getfonts.asp
  fonts = FONTS;

 
  constructor() { }
 
  ngOnInit() {
  }
 

}
