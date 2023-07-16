import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(5)]}),
  });

  recover = new FormControl(
    '',
    {
      validators: [
        Validators.required, 
        Validators.pattern('^[0-9]{8,}$'),
      ],
    },
  );

  mode: 'login' | 'recover' = 'login';

  constructor(
    private authService: AuthService,
    private readonly utils: UtilsService,
  ) {}
  
  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      if (email && password) {
        this.authService.login(email, password);
        return;
      }

      this.utils.showNotification('los valores no son validos');
    }
  }
  
}
