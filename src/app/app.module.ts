import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { TestRequestModule } from './test-request/test-request.module';
import { ShoppingModule } from './shopping/shopping.module';

// component styles
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ShoppingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
