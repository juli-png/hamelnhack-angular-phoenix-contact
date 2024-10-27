import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from
	'@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { ChartModule } from 'primeng/chart';
import { HttpClient } from '@angular/common/http';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import {NgOptimizedImage} from "@angular/common";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ImageModule,
    ChartModule,
    HttpClientModule,
    NgOptimizedImage,
    MatTabGroup,
    MatTab
  ],
	declarations: [AppComponent, HeaderFooterComponent],
	bootstrap: [AppComponent],
})
export class AppModule { }
