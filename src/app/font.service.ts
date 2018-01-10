import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Font } from './font';
import { FONTS } from './mock-fonts';
import { MessageService } from './message.service';

@Injectable()

export class FontService {



  constructor(private messageService: MessageService) { }

  getFonts(): Observable<Font[]> {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('FontService: fetched fonts');
	
	
    //return filtered FONTS by: random, number, dingbat, a, b, c, d, e, f ...
	
	//https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
	
    return of(FONTS);
  }
}