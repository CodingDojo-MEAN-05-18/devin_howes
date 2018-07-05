import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { BikeService } from '../services';
import { Bike } from '../bike';

@Injectable()
export class BikeResolve implements Resolve<Bike> {

    constructor(private bikeService: BikeService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Bike> {
        return this.bikeService.getBike(route.paramMap.get('id'));
    }
}
