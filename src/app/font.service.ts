import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Font } from './font';
import { FONTS } from './mock-fonts';
import { MessageService } from './message.service';

@Injectable()

export class FontService {

  filteredFonts: Font[] = FONTS;

  constructor(private messageService: MessageService) { }

  getFonts(): Observable<Font[]> {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('FontService: fetched fonts');
	
    return of(FONTS);
  }

  getList(string): Observable<Font[]> {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('FontService: fetching list');
	
	  this.filteredFonts = this.filterFonts(string);
    //return filtered FONTS by: random, number, dingbat, a, b, c, d, e, f ...
	
	//https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
	
    return of(this.filteredFonts);
  }

  filterFonts(char:string){
    //if font.name starts with matching parameter 'char' add to array

  return FONTS.filter(FONTS => FONTS.name[0].toUpperCase().indexOf(char) !== -1);

 //   return (fFonts)
  }
}