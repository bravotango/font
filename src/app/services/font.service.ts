import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Font } from '../font';
import { FONTS } from '../mock-fonts';
import { MessageService } from './message.service';
import { notEqual } from 'assert';

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

    const defaultNumber = 20;

    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('getList: entered');
  
    if (string.length==1) {
      this.filteredFonts = this.filterFontsByCaseSensitiveSingleCharacter(string);
    } else {
      switch (string) {
        case 'NUMBER': this.filteredFonts = this.filterFontsByStartsWithNumber();
          break;
        case 'DINGBAT': this.filteredFonts = this.filterFontsByAttributeDingbatTrue();
          break;
        case 'RANDOM': this.filteredFonts = this.getRequestedNumberOfFonts(defaultNumber);
          break;
      }
    }
    return of(this.filteredFonts);
  }

  searchFonts(string): Observable<Font[]> {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('searchFonts: entered');
    console.log('searchFonts: entered');
  
    if (string) {
      this.filteredFonts = this.filterFontsBySearchString(string);
    } 
    return of(this.filteredFonts);
  }

  filterFontsBySearchString(string:string){
    //if font.name starts with matching parameter 'char' add to array
    this.messageService.add('filterFontsBySearchString: filtered by ' + string);
    console.log('filterFontsBySearchString entered, string = ' + string);
    return FONTS.filter(FONTS => FONTS.name.toUpperCase().indexOf(string) !== -1);
  }

  filterFontsByCaseSensitiveSingleCharacter(string:string){
    //if font.name starts with matching parameter 'char' add to array
    this.messageService.add('filterFontsByCaseSensitiveSingleCharacter: filtered by ' + string);
    return FONTS.filter(FONTS => FONTS.name[0].toUpperCase().indexOf(string) !== -1);
  }

  filterFontsByStartsWithNumber(){
    //if font.name starts with a number
    this.messageService.add('filterFontsByStartsWithNumber: filtered by number');
    return FONTS.filter(FONTS => FONTS.name[0].match(/^\d/));
  }

  filterFontsByAttributeDingbatTrue(){
    //if font.dingbat is true
    this.messageService.add('filterFontsByAttributeDingbatTrue: filtered by dingbat');
    return FONTS.filter(FONTS => FONTS.dingbat=="1");
  }

  getRequestedNumberOfFonts(requestedNumberOfFonts){
    //if font.dingbat it true
    this.messageService.add('getRequestedNumberOfFonts: ' + requestedNumberOfFonts);

    //get font count
    var fontCount = FONTS.length;
    //create array, add random numbers to array up to 'requestedNumberOfFonts'

    var randomFonts = [];
    var randomNumber = -1;
    for (var i = 0; i < requestedNumberOfFonts; i++) {
      randomNumber = this.getRandomFontArrayPosition(0,fontCount);
      randomFonts.push(FONTS[randomNumber]);
    }

    //return FONTS.filter(FONTS => FONTS.dingbat=="1");
    return randomFonts;
  }

  getRandomFontArrayPosition(min, max) {
    var randomNumber = Math.trunc(Math.random() * (max - min) + min);
    this.messageService.add(' - getRandomFontArrayPosition: ' + randomNumber);
    return randomNumber;
  }

}