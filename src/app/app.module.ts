import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ListComponent }   from './list/list.component';
import { FontDownloadComponent } from './font-download/font-download.component';
import { FontComponent } from './font/font.component';
import { MessagesComponent } from './messages/messages.component';

import { FontService } from './font.service';
import { MessageService } from './message.service';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
	ListComponent,
	DashboardComponent,
	FontComponent,
	MessagesComponent
  ],
  imports: [
	BrowserModule,
    NgbModule.forRoot(),
	AppRoutingModule,
	BrowserAnimationsModule,
	MatCheckboxModule, MatButtonModule, MatMenuModule, MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule],
  providers: [FontService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
