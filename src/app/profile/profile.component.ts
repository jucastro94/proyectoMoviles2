import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
  loggedUser = this.authService.user;
  showDelete = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.showDelete = id !== this.loggedUser()._id && this.loggedUser().role.manageUsers;
    });
  }
}
