import { Component, WritableSignal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  loggedUser: WritableSignal<User>;

  constructor(private authService: AuthService) {
    this.loggedUser = this.authService.user;
  }
}
