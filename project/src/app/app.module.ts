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
    HttpClientModule 
	], 
	declarations: [AppComponent], 
	bootstrap: [AppComponent], 
}) 
export class AppModule { }
