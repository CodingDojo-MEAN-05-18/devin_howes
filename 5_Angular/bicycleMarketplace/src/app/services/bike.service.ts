import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Bike } from '../bike';

@Injectable()
export class BikeService {
  // mock api for list of bikes
  private base = '';

  // private base = '/api/bikes';

  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.base);
  }

  getBike(id: string): Observable<Bike> {
    return this.http.get<Bike>(`${this.base}/${id}`);
  }

  createBike(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.base, Bike);
  }

  deleteBike(bike: Bike): Observable<Bike> {
    return this.http.delete<Bike>(`${this.base}/${bike._id}`);
  }

}
