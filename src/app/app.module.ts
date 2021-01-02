import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { DatePipe } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es-CO');

import { AppComponent } from './app.component';
import { LinearChartComponent } from './components/linear-chart/linear-chart.component';
import { CurrentWeatherDataComponent } from './components/current-weather-data/current-weather-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityFormComponent } from './components/city-form/city-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LinearChartComponent,
    CurrentWeatherDataComponent,
    CityFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [DatePipe, {provide: LOCALE_ID, useValue: 'es-CO'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
