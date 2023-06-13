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

  /**
   * almacena la token dada por el usuario and la guarda, permite al usuario pasar
   */
  login(): void {
    this.isLogged.set(true);
    localStorage.setItem('token', '');
    this.fetchUserData();
    this.router.navigate(['/menu']);
  }

  /**
   * saca al usuario del sistema y borra de memoria local los datos de usuario
   */
  logout(): void {
    this.isLogged.set(false);
    this.router.navigate(['']);
    this.user.set(new NotLogged());
  }

  /**
   * solicita al servidor los datos del usuario y los almacena en memoria
   */
  fetchUserData() {
    const userData = new Employee();
    userData.name = 'maiki';
    this.user.set(userData);
  }
  
}
