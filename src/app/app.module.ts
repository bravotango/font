import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, NgModule, OnChanges } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent }   from './list/list.component';
import { FontComponent } from './font/font.component';
import { MessagesComponent } from './messages/messages.component';

import { FontService } from './font.service';
import { MessageService } from './message.service';
import { MatCheckboxModule, MatButtonToggleGroup, MatIcon, MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule,MatGridListModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponent } from './navigation/navigation.component';
import { ColorsComponent } from './colors/colors.component';



@NgModule({
  declarations: [
		AppComponent,
		ListComponent,
		MessagesComponent,
		NavigationComponent,
		ColorsComponent
  ],
  imports: [
	BrowserModule,
    NgbModule.forRoot(),
	AppRoutingModule,
	BrowserAnimationsModule,
	MatCheckboxModule, MatButtonModule, MatMenuModule, MatCardModule,MatToolbarModule,MatChipsModule,MatGridListModule,MatSliderModule,MatIconModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatToolbarModule,MatChipsModule,MatGridListModule,MatSliderModule,MatIconModule],
  providers: [FontService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule {

	}
