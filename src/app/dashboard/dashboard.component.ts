import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { FONTS } from '../mock-fonts';
import { Navigation } from '../main-navigation';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

navigation=[{character:'a'},{character: 'b'},{character: 'c'},{character: 'd'},{character: 'e'},{character: 'f'},{character: 'g'},{character: 'h'},{character: 'i'},{character: 'j'},{character: 'k'},{character: 'l'},{character: 'm'},{character: 'n'},{character: 'o'},{character: 'p'},{character: 'q'},{character: 'r'},{character: 's'},{character: 't'},{character: 'u'},{character: 'v'},{character: 'w'},{character: 'x'},{character: 'y'},{character: 'z'}];


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
	img: '/f2/images/zone23.gif', 
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

  constructor() { }

  ngOnInit() {
  }

}