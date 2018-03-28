import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, NgModule, OnChanges } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent }   from './list/list.component';
import { MessagesComponent } from './messages/messages.component';

import { MatRadioModule } from '@angular/material/radio';
import { MessageService } from './message.service';
import { MatTabsModule } from '@angular/material/tabs';

import { MatCheckboxModule, MatButtonToggleGroup, MatIcon, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule,MatGridListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule} from '@angular/material/table';



import { NavigationComponent } from './navigation/navigation.component';
import { ColorsComponent } from './colors/colors.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HtmlcodesComponent } from './htmlcodes/htmlcodes.component';

@NgModule({
  declarations: [
		AppComponent,
		ListComponent,
		MessagesComponent,
		NavigationComponent,
		ColorsComponent,
		SidenavComponent,
		HtmlcodesComponent
  ],
  imports: [
	BrowserModule,
    NgbModule.forRoot(),
	AppRoutingModule,
	BrowserAnimationsModule,
	MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatInputModule,MatMenuModule, MatCardModule,MatRadioModule,MatTabsModule,MatToolbarModule,MatChipsModule,MatGridListModule,MatSelectModule,MatSliderModule,MatSidenavModule,MatTableModule,MatIconModule
  ],
  exports: [MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatMenuModule, MatCardModule, MatRadioModule,MatTabsModule,MatToolbarModule,MatChipsModule,MatGridListModule,MatSelectModule,MatSliderModule,MatSidenavModule,MatTableModule,MatIconModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})

export class AppModule {
	columns : number;
  setNumberOfColumns(element) {
    if (element > 1600) {
      this.columns = 5;
    }

    else if (element < 1601 && element > 1280) {
      this.columns = 5;
    }    

    else if (element < 1280 && element > 1024) {
      this.columns = 3;
    }

    else if (element < 1025 && element > 840) {
      this.columns = 3;
    }

    else if (element < 841 && element > 480) {
      this.columns = 2;
    }
    else {
      this.columns = 1;
    }
  }

  getWindowSize(event) {
    const element = event.target.innerWidth;
    console.log(element);
    this.setNumberOfColumns(element);    
  }

	}
