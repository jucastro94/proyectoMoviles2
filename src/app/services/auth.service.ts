import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, NotLogged, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = signal(false);

  user = signal<User>(new NotLogged());

  constructor(private router: Router) { }

  login() {
    this.isLogged.set(true);
    this.user.set(new Employee());
  }

  logout() {
    this.isLogged.set(false);
    this.router.navigate(['']);
    this.user.set(new NotLogged());
  }
  
}
