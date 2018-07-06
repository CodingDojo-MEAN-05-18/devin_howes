import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User, login: any) {
    this.auth.login(user).subscribe(logged => {
      console.log('logged in', user);
      this.router.navigateByUrl('bikes');
    });
  }
}
