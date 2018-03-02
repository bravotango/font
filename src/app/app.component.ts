import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontComponent } from './font/font.component';
import { ColorsComponent } from './colors/colors.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


