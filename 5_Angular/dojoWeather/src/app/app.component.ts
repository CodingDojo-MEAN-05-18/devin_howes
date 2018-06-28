import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dojo Weather Forecast';
  cityName: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  setCity(cityName: string) {
    console.log('getting weather for', cityName);
    this.weatherService.getWeather(cityName);
  }
}
