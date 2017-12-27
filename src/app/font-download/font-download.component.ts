import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import { FontService } from '../font.service';
//import { FONTS } from '../mock-fonts';

@Component({
  selector: 'app-font-download',
  templateUrl: './font-download.component.html',
  styleUrls: ['./font-download.component.css']
})

export class FontDownloadComponent implements OnInit {

fonts:Font[] = [
  { id: 1058,
    name: 'Alienator',
	img: '/f2/images/alienator.gif', 
	zip: '/f2/zips/alienator.zip',
	dingbat:0
  },
  { id: 6,
    name: '18th Century',
	img: '/f2/images/18thcentury.gif', 
	zip: '/f2/zips/18thcentury.zip',
	dingbat:0
  },
  { id: 1054,
    name: 'Zone23 Hiromi',
	img: '/f2/images/zone23hiromi.gif', 
	zip: '/f2/zips/zone23hiromi.zip',
	dingbat:0
  },
  { id: 60,
    name: 'Army Boy',
	img: '/f2/images/armyboy.gif', 
	zip: '/f2/zips/armyboy.zip',
	dingbat:0
  },
  { id: 734,
    name: 'Rugged Stencil',
	img: '/f2/images/ruggedstencil.gif', 
	zip: '/f2/zips/ruggedstencil.zip',
	dingbat:0
  },
  { id: 629,
    name: 'Party Hats',
	img: '/f2/images/partyhats.gif', 
	zip: '/f2/zips/partyhats.zip',
	dingbat:0
  }
 ];
  
  constructor(  ) {}

  ngOnInit(){  }

}
