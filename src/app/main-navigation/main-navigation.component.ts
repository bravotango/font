import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {


navigation=[{character:'a'},{character: 'b'},{character: 'c'},{character: 'd'},{character: 'e'},{character: 'f'},{character: 'g'},{character: 'h'},{character: 'i'},{character: 'j'},{character: 'k'},{character: 'l'},{character: 'm'},{character: 'n'},{character: 'o'},{character: 'p'},{character: 'q'},{character: 'r'},{character: 's'},{character: 't'},{character: 'u'},{character: 'v'},{character: 'w'},{character: 'x'},{character: 'y'},{character: 'z'}];

  constructor() { }
  page = 4;
  ngOnInit() {
  }

}
