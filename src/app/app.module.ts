import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule ,CalendarMonthViewComponent,CalendarDayViewComponent,CalendarWeekViewComponent, CalendarEventTitleFormatter} from 'angular-calendar';
 
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  providers: [CalendarDateFormatter,CalendarDateFormatter,CalendarEventTitleFormatter],
  bootstrap: [AppComponent]
})
export class AppModule { }
