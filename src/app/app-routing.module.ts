import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }      from './list/list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ColorsComponent }   from './colors/colors.component';

const routes: Routes = [
  { path: '', redirectTo: '/list/random', pathMatch: 'full' },
  { path: 'list/:char', component: ListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colors/crayola', component: ColorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

//added comment to see "Changes" on git
export class AppRoutingModule {}

