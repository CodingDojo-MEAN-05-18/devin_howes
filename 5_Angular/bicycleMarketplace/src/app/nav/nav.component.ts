import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'Bicycle Marketplace';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    if (this.auth.isAuthed()) {
      console.log('logging out');
      this.auth.logout();
      this.router.navigateByUrl('/');
    }
  }
}
