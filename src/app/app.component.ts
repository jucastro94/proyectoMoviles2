import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { checkToken } from './utils/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHeader = this.authService.isLogged;

  constructor(private authService: AuthService, private router: Router) {
    const isLogged = checkToken();
    if (!isLogged) {
      this.router.navigate(['']);
      return;
    }

    this.authService.isLogged.set(true);
    this.authService.fetchUserData();
  }

}
