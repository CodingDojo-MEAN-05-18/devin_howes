import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bike } from '../../bike';

import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit, OnDestroy {
  bikes: Bike[] = [];
  sub: Subscription;
  filter: Bike = new Bike();
  display = 'none';
  bikeOwnerInfo = {id: '', name: '', email: ''};

  constructor(
    private bikeService: BikeService,
  ) { }

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clearFilter(): void {
    this.filter = new Bike();
  }

  onDelete(bikeToDelete: Bike) {
    console.log('Deleting bike', bikeToDelete);
    this.bikeService.deleteBike(bikeToDelete)
      .subscribe(deletedBike => {
        console.log('Deleted bike', deletedBike);
        this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
    });
  }

  // Modal methods
  openModal(bike) {
    this.display = 'block';
    this.bikeOwnerInfo.id = bike.ownerId;
    // console.log(this.bikeOwnerInfo);
  }

  onCloseHandled() {
    this.display = 'none';
    this.bikeOwnerInfo = {id: '', name: '', email: ''};
    // console.log(this.bikeOwnerInfo);
  }
  // End Modal methods
}
