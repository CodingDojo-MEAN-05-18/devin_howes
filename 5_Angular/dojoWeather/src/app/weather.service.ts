import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Location } from '../app/location';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  object: any;

  constructor(private http: HttpClient) { }

  getWeather(cityName) {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7681eadf89a43bd959ede0c994e7c1a2`)
    .subscribe(
      (response) => {
        console.log(`Got weather from ${cityName}`, response);
        this.object = response;
        this.object.averageTemp = this.convertTemp(this.object.main.temp);
        this.object.minTemp = this.convertTemp(this.object.main.temp_min);
        this.object.maxTemp = this.convertTemp(this.object.main.temp_max);
      },
      (error) => {
        console.log('Error!', error);
      }
    );
  }

  displayWeather() {
    // console.log(this.object);
    return this.object;
  }

  convertTemp(temp) {
    return Math.round(((temp - 273.15) * 1.8) + 32);
  }

}
