import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bike } from '../../bike';

import { AuthService, BikeService } from '../../services';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit, OnDestroy {
  bikes: Bike[] = [];
  sub: Subscription;
  authed: boolean;
  filter: Bike = new Bike();
  display = 'none';
  bikeOwnerInfo = {id: '', name: '', email: ''};

  constructor(
    private bikeService: BikeService, private auth: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });

    this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clearFilter(): void {
    this.filter = new Bike();
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop', event);
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
