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
    return of(FONTS);
  }
}
