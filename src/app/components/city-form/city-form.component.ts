import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCity(cityName: string) {}

  setLocation(cityName: HTMLInputElement) {
    console.log(cityName.value);
    cityName.value = ''
    cityName.focus();
    return false;
  }

}
