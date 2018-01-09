import { Component, OnInit } from '@angular/core';
import { Font } from '../font';
import { FontService } from '../font.service';
import { FONTS } from '../mock-fonts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

navigation = "abcdefghijklmnopqrstuvwxyz".split("");

fonts : Font[];
  constructor(private fontService: FontService) { }

  ngOnInit() {
    this.getFonts();
  }
  getFonts(): void {
    this.fontService.getFonts()
        .subscribe(fonts => this.fonts = fonts);
  }
}