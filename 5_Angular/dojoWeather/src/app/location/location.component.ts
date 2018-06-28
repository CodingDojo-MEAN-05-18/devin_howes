import { Component, OnInit, DoCheck } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, DoCheck {
  object: Location[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.object = this.weatherService.displayWeather();
  }

}
