import { Component, WritableSignal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { sampleForms } from '../utilities/constants';
import { Form } from '@models/form';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  loggedUser: WritableSignal<User>;

  forms = Object.values(sampleForms) as Form[];

  constructor(private authService: AuthService) {
    this.loggedUser = this.authService.user;
  }
}
