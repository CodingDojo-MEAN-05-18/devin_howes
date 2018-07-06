import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Bike } from '../../bike';
import { BikeService } from '../../services';

@Component({
  selector: 'app-bike-manage',
  templateUrl: './bike-manage.component.html',
  styleUrls: ['./bike-manage.component.css']
})
export class BikeManageComponent implements OnInit, OnDestroy {
  bike = new Bike();
  sub: Subscription;

  constructor(
    private readonly bikeService: BikeService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.bike);

    this.sub = this.bikeService.createBike(this.bike)
      .subscribe(bike => {
        console.log('bike from api', bike);
        this.router.navigateByUrl('/bikes');
      });
  }

}
