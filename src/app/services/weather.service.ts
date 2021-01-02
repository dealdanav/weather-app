import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'dd11d35582129a9d768d09c57f020a2f';
  URL: string = '';

  constructor(private httpClient: HttpClient) {
    this.URL = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&lang=es&q=`;
  }

  getWeatherData(cityName: string) {
    return this.httpClient.get(`${this.URL}${cityName}`);
  }
}
