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
  bikes: Bike[] = [];
  sub: Subscription;

  constructor(
    private readonly bikeService: BikeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });
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
        form.resetForm();
        // Update bikes list
        this.sub = this.bikeService.getBikes().subscribe(bikes => {
          this.bikes = bikes;
        });
      });
  }

  onUpdate(bikeToUpdate: Bike) {
    console.log('updating bike', bikeToUpdate._id);

    this.sub = this.bikeService.updateBike(bikeToUpdate._id, bikeToUpdate)
      .subscribe(bike => {
        console.log('bike from api', bike);
        // Update bikes list
        this.sub = this.bikeService.getBikes().subscribe(bikes => {
          this.bikes = bikes;
        });
      });
    }

  onDelete(bikeToDelete: Bike) {
    console.log('Deleting bike', bikeToDelete);
    this.bikeService.deleteBike(bikeToDelete)
      .subscribe(deletedBike => {
        console.log('Deleted bike', deletedBike);
        this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
    });
  }

}
