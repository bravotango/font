import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AppRoutingModule } from './/app-routing.module';

import { ListComponent }      from './list/list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FontDownloadComponent } from './font-download.component';
import { FontComponent } from './font/font.component';
import { MessagesComponent } from './messages/messages.component';

import { FontService } from './font.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
	ListComponent,
	DashboardComponent,
	FontComponent,
	MessagesComponent
  ],
  imports: [
	BrowserModule,
    NgbModule.forRoot(),
	AppRoutingModule
  ],
  providers: [FontService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
