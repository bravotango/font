import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HtmlCode } from '../htmlCode';
import { HTMLCODES } from '../mock-html-codes';
import { MessageService } from './message.service';
import { notEqual } from 'assert';

@Injectable()

export class HtmlCodeService {

  Codes = HTMLCODES;

  constructor(private messageService: MessageService) { }

  getCodes() {

    this.messageService.add('getCodes: entered');
	  console.log(this.Codes)
    return of(this.Codes);
  }

  searchAllCodeFields(string) {

    this.messageService.add('service - searchAllCodeFields: entered');
    console.log('service - searchAllCodeFields: entered');
  
    if (string) {
      this.Codes = this.filterCodesBySearchString(string);
    } 
    console.log('service - searchAllCodeFields: leaving with codes = ' + this.Codes);
    return of(this.Codes);
  }

  filterCodesBySearchString(string:string){
    //if font.name starts with matching parameter 'char' add to array
    this.messageService.add('service - filterFontsBySearchString: filtered by ' + string);
    console.log('service - filterFontsBySearchString entered, string = ' + string);
    return HTMLCODES.filter(HTMLCODES => (HTMLCODES.code.indexOf(string) !== -1 || HTMLCODES.name.toUpperCase().indexOf(string) !== -1) || HTMLCODES.symbol.toUpperCase().indexOf(string) !== -1  || HTMLCODES.description.toUpperCase().indexOf(string) !== -1);
  }
}