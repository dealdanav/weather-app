import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { ForecastService } from './../../services/forecast.service';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.scss']
})
export class CurrentWeatherDataComponent implements OnInit {
  weather;
  sunrise;
  sunset;
  fecha;
  forecastData;
  tmpMax;
  tmpMin;
  constructor(private weatherService: WeatherService, private forecast: ForecastService) { }

  ngOnInit() {
    this.weatherService.getWeatherData('Bogota')
    .subscribe(
      res => {
        console.log(res);
        this.weather = res;
        this.sunrise = new Date(this.weather.sys.sunrise*1000);
        this.sunset = new Date(this.weather.sys.sunset*1000);
        this.fecha = new Date(this.weather.dt*1000);
      },
      err => console.log(err)
    );
    this.forecast.getForecastData(4.61, -74.08)
    .subscribe(
      rsp => {
        this.forecastData = rsp;
        this.tmpMax = this.forecastData.daily[0].temp.max;
        this.tmpMin = this.forecastData.daily[0].temp.min;
      },
      erro => console.log(erro)
    )
  }

}
