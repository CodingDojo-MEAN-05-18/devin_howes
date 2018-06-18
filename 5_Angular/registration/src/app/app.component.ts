import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = new User();
  name: string = '';
  userEmail: string = '';
  address: string = '';
  onSubmit(event, formData) {
    if (formData.valid) {
      console.log(formData);
      event.preventDefault();
      this.name = `${this.user.firstName} ${this.user.lastName}`;
      this.userEmail = `${this.user.email}`;
      this.address = `${this.user.streetAddress} ${this.user.address2} ${this.user.city}, ${this.user.state}`;
      this.user = new User();
      formData.reset();
    } else {
      this.name = '';
      this.userEmail = '';
      this.address = '';
    }
  }
}
