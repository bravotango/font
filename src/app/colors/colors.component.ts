import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crayola } from '../crayola';
import { ColorService } from '../color.service';
import { COLORS } from '../mock-colors';
import { element } from 'protractor';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
  providers: [ColorService]
})
export class ColorsComponent implements OnInit {

  colors = COLORS;
  red = 255;
  green = 255;
  blue = 255;

  constructor(private colorService: ColorService) { }
  columns : number;

  ngOnInit() {
    this.getColors();
    this.setNumberOfColumns(window.innerWidth);
  }


  getColors(): void {
    this.colorService.getColors().subscribe(colors => this.colors = colors);
  }

  setMyStyles(color) {
    return  { 'color': color.hex};
  }


  setMyHeader(color) {
    var fontColor = "#fff;"
    //https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    //the commented out call below was called the better script, but reading Orange Red with dark text seems more difficult
    fontColor = this.setTextToBlackOrWhite(color);
    //fontColor = this.pickTextColorBasedOnBgColorAdvanced(color.hex,'#fff','#000');
    return  { 'background-color': color.hex , 'color' : fontColor};
  }

  setTextToBlackOrWhite(color) {
    var textColor = "#fff" // default to white
    var rgb = color.rgb;

    var rgbArray = rgb.match(/\d+/g);
    var red = rgbArray[0];
    var green = rgbArray[1];
    var blue = rgbArray[2];

    if ((red*0.299 + green*0.587 + blue*0.114) > 186) { textColor = "#000" }

    return textColor; 
  }



  filterColor(event, color){ 
    console.log('value: ' + event.value);

    if (color=='red' ){ this.red = event.value }
    if (color=='green' ){ this.green = event.value }
    if (color=='blue' ){ this.blue = event.value }

    this.colors = this.colorService.filterColorsByRGB(COLORS,this.red,this.green,this.blue);

  }

  pickTextColorBasedOnBgColorAdvanced(bgColor, lightColor, darkColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
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
