import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { checkToken, getId } from './utilities/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHeader = this.authService.isLogged;

  constructor(private authService: AuthService, private router: Router) { 
    if (checkToken()) {
      const id = getId();
      this.authService.fetchUserData(id).subscribe(data => {
        this.authService.user.set(data);
        this.authService.isLogged.set(true);
      });
      return;
    }

    this.router.navigate(['']);
  }

}
