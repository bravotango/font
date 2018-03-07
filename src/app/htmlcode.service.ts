import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HtmlCode } from './htmlCode';
import { HTMLCODES } from './mock-html-codes';
import { MessageService } from './message.service';
import { notEqual } from 'assert';

@Injectable()

export class HtmlCodeService {

  Codes: HtmlCode[] = HTMLCODES;

  constructor(private messageService: MessageService) { }

  getCodes(): Observable<HtmlCode[]>  {
    // Todo: send the message _after_ fetching the fonts
    this.messageService.add('getCodes: entered');
	console.log(this.Codes)
    return of(this.Codes);
  }
}