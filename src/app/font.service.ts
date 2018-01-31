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
    this.messageService.add('getFonts: entered');
	
    return of(FONTS);
  }

  getList(string): Observable<Font[]> {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('getList: entered');
	
	  this.filteredFonts = this.filterFonts(string);
 
    return of(this.filteredFonts);
  }

  filterFonts(string:string){
    //if font.name starts with matching parameter 'char' add to array
    this.messageService.add('filterFonts: filtered by ' + string);
    return FONTS.filter(FONTS => FONTS.name[0].toUpperCase().indexOf(string) !== -1);

 //   return (fFonts)
  }
}