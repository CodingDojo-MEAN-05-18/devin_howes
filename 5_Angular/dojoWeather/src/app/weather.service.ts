import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Location } from '../app/location';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  location: Location[] = [];


  constructor(private http: HttpClient) { }

  getWeather() {
    const city = 'seattle';

    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7681eadf89a43bd959ede0c994e7c1a2`)
    .subscribe(
      (response) => {
        console.log(`Got weather from ${city}`, response);
      },
      (error) => {
        console.log('Error!', error);
      }
    );
  }

}
