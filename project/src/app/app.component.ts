import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [MessageService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  basicData0: any;
  basicData1: any;
  basicOptions: any;


  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private http: HttpClient // HttpClient injizieren
  ) {}

  ngOnInit() {
    // JSON-Daten laden
    this.http.get<any>('/data.json').subscribe({
      next: (data) => {
        this.basicData0 = data;
        this.initializeChartOptions();
      },
      error: (error) => {
        console.error('Fehler beim Laden der JSON-Daten:', error);
      },
    });
  }

  initializeChartOptions() {
    this.basicOptions = {
      title: {
        display: true,
        text: 'Article Views',
        fontSize: 32,
        position: 'top',
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
