import { Component, WritableSignal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Form } from '@models/form';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  loggedUser: WritableSignal<User>;

  forms: Form[] = new Array();

  constructor(
    private authService: AuthService,
    private readonly formsService: FormsService,
  ) {
    this.loggedUser = this.authService.user;
    this.formsService.getAllForms().subscribe(data => this.forms = data);
  }
}
