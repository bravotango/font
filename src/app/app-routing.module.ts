import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }      from './list/list.component';
import { ColorsComponent }   from './colors/colors.component';
import { HtmlcodesComponent } from './htmlcodes/htmlcodes.component';

const routes: Routes = [
  { path: '', redirectTo: '/fonts', pathMatch: 'full' },
  { path: 'fonts', component: ListComponent },
  { path: 'font/list/:char', component: ListComponent },
  { path: 'colors/crayola', component: ColorsComponent },
  { path: 'html/codes', component: HtmlcodesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

//added comment to see "Changes" on git
export class AppRoutingModule {}

