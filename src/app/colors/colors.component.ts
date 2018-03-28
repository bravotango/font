import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crayola } from '../crayola';
import { Color } from '../color';
import { ColorService } from '../color.service';
import { CRAYOLA } from '../mock-colors-crayola';
import { COLORS } from '../mock-colors-256';
import { element } from 'protractor';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styles: [require('./colors.component.css')],
  providers: [ColorService]
})
export class ColorsComponent implements OnInit {

  colors = COLORS;
  crayola = CRAYOLA;
  red = 255;
  green = 255;
  blue = 255;
  customHex ="";
  swapColors = true;
  swapCrayola = true;

  constructor(private colorService: ColorService) { }
  columns : number;

  ngOnInit() {
    this.getCrayolas();
    this.setNumberOfColumns(window.innerWidth);
  }

  getCrayolas(): void {
    this.colorService.getCrayolas().subscribe(crayola => this.crayola = crayola);
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


  setMyCustomColor(r,g,b) {
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    var customTextColor = "#fff";
    //console.log('rgb: ' + rgb);
    this.rgbToHex(r, g, b);
    //console.log('r: ' +r + ', g: ' + g + ', b: ' + b);
    var colorNumber = (r*0.299 + g*0.587 + b*0.114) ;
    //console.log(colorNumber);
    if ((colorNumber) > 186) { customTextColor = "#000" }
    return {'background-color': rgb , 'color' : customTextColor}
  }


  setTextToBlackOrWhite(color) {
    var textColor = "#fff" // default to white
    var rgb = color.rgb;
    //console.log('rgb: ' + rgb);
    var rgbArray = rgb.match(/\d+/g);
    var red = rgbArray[0];
    var green = rgbArray[1];
    var blue = rgbArray[2];

    if ((red*0.299 + green*0.587 + blue*0.114) > 150) { textColor = "#000" } // was originally set to  > 186

    return textColor; 
  }

componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

rgbToHex(r, g, b) {
  this.customHex = ("#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b));
}


filterColor(event, color){ 
 // console.log('value: ' + event.value);

  if (color=='red' ){ this.red = event.value }
  if (color=='green' ){ this.green = event.value }
  if (color=='blue' ){ this.blue = event.value }

  this.colors = this.colorService.filterColorsByRGB(COLORS,this.red,this.green,this.blue);
  this.crayola = this.colorService.filterColorsByRGB(CRAYOLA,this.red,this.green,this.blue);

}



  setNumberOfColumns(element) {
    if (element > 1600) {
      this.columns = 5;
    }

    else if (element < 1601 && element > 1280) {
      this.columns = 5;
    }    

    else if (element < 1280 && element > 1024) {
      this.columns = 3;
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
    console.log('innerWidth' + event.target.innerWidth);
    this.setNumberOfColumns(element);    
  }



}
