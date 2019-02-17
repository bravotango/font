import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppInsightsService} from './services/app-insights.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, appInsightsService : AppInsightsService){
    appInsightsService.logPageView(this.router.url)
  }

  title = 'app';
  shouldRun = true;
  year = getThisYear();


}
function getThisYear() {
  var d = new Date();
  var n = d.getFullYear();
  return n;
}
