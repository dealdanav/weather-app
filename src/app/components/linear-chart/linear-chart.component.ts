import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ForecastService } from './../../services/forecast.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {

  forecast;
  public lineChartLabels: Label[];
  public lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: '' 
    },
    {
      data: [],
      label: '' 
    }
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  constructor(private forecastService: ForecastService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.forecastService.getForecastData(4.61, -74.08)
      .subscribe(
        rsp => {
          console.log(rsp);
          this.forecast = rsp,
          this.lineChartLabels = [
            this.datePipe.transform(this.forecast.daily[0].dt*1000, 'EEEE'),
            this.datePipe.transform(this.forecast.daily[1].dt*1000, 'EEEE'),
            this.datePipe.transform(this.forecast.daily[2].dt*1000, 'EEEE'),
            this.datePipe.transform(this.forecast.daily[3].dt*1000, 'EEEE'),
            this.datePipe.transform(this.forecast.daily[4].dt*1000, 'EEEE')
          ]
          this.lineChartData = [
            {
              data: [
                this.forecast.daily[0].temp.max,
                this.forecast.daily[1].temp.max,
                this.forecast.daily[2].temp.max,
                this.forecast.daily[3].temp.max,
                this.forecast.daily[4].temp.max,
              ],
              label: 'Temp Max'
            },
            {
              data: [
                this.forecast.daily[0].temp.min,
                this.forecast.daily[1].temp.min,
                this.forecast.daily[2].temp.min,
                this.forecast.daily[3].temp.min,
                this.forecast.daily[4].temp.min,
              ],
              label: 'Temp Min'
            }
          ]
        },
        erro => console.log(erro)
      )
  }
}
