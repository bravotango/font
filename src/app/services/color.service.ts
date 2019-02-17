import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Crayola } from '../crayola';
import { CRAYOLA } from '../mock-colors-crayola';

import { Color } from '../color';
import { COLORS } from '../mock-colors-256';

import { MessageService } from './message.service';
import { notEqual } from 'assert';

@Injectable()

export class ColorService {

  ColorsCrayola: Crayola[] = CRAYOLA;
  Colors256: Color[] = COLORS;

  constructor(private messageService: MessageService) { }

  getColors()  {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('getColors: entered');

    console.log(this.Colors256)
    return of(this.Colors256);
  }

  getCrayolas()  {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('getCrayolas: entered');
    console.log(this.ColorsCrayola)
    return of(this.ColorsCrayola);
  }

  filterColorsByRGB(c,r,g,b) {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('filterColorsByRGB: entered');
    this.messageService.add('r: '+ r);
    this.messageService.add('g: '+ g);
    this.messageService.add('b: '+ b);

    //  string.lastIndexOf(searchvalue, start)


    //return c.filter(c => c.rgb.substring(c.rgb.firstIndexOf("(")+1,c.rgb.firstIndexOf(",")) > r );

    // this is red   : return c.filter(c => (c.rgb.substring(1,c.rgb.indexOf(','))) <= r)
    // this is green : return c.filter(c => (c.rgb.substring(c.rgb.indexOf(', ')+1,c.rgb.lastIndexOf(', '))) <= g) ;
    // this is blue  : return c.filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b);




    return c.filter(c => (c.rgb.substring(1,c.rgb.indexOf(','))) <= r).filter(c => (c.rgb.substring(c.rgb.indexOf(', ')+1,c.rgb.lastIndexOf(', '))) <= g).filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b);


    //return c.filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b)

    

    
//return c.filter(c => (c.rgb.substring(1,c.rgb.indexOf(','))) <= r).filter(c => (c.rgb.substring(c.rgb.indexOf(', ')+1,c.rgb.lastIndexOf(', '))) <= g).filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b) ;
   

//return c.filter(c => (c.rgb.substring(1,c.rgb.indexOf(','))) <= r).filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b) ;




    //return c.filter(c => (c.rgb.substring(1,c.rgb.indexOf(','))) <= r).filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b) ;
    //this works so far for R ? B (not G yet) --> return c.filter(c => (c.rgb.substring(1,c.rgb.indexOf(','))) <= r).filter(c => (c.rgb.substring(c.rgb.lastIndexOf(', ')+1,c.rgb.lastIndexOf(')'))) <= b) ;

    
    //return c.filter(c => c.name.indexOf('Magenta') !== -1);
    //return FONTS.filter(FONTS => FONTS.name[0].toUpperCase().indexOf(string) !== -1);
    //return FONTS.filter(FONTS => FONTS.dingbat=="1");
  }
}