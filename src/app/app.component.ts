import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  chart: Chart;

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [{
          label: 'Fatturato 2018',
          data: [1000, 12000, 13000, 900, 1000, 11000, 14000, 18000, 23000, 500],
          backgroundColor: [
            'rgba(255, 133, 49, 0.2)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        },
          {
            label: 'Fatturato 2019',
            data: [12000, 1000, 30000, 5333, 9, 8],
            backgroundColor: [
              'rgba(255, 133, 69, 0.2)',
            ],
            borderColor: [
              'rgba(255, 3, 86, 1)',
            ],
            borderWidth: 1
          }]
      },
    });
  }

}
