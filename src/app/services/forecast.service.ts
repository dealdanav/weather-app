import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  apiKey = 'dd11d35582129a9d768d09c57f020a2f';
  forecastURL: string = '';

  constructor(private httpClient: HttpClient) {
    // this.forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=4.61&lon=-74.08&exclude=minutely,hourly,alerts&appid=${this.apiKey}&units=metric&lang=es`;
    this.forecastURL = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&appid=${this.apiKey}&units=metric&lang=es&`;
  }

  getForecastData(latitud:number, longitud:number) {
    return this.httpClient.get(`${this.forecastURL}lat=${latitud}&lon=${longitud}`);
  }
}
