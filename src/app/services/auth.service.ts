import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NotLogged, User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { API } from '../utilities/common';
import { map } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = signal(false);

  user = signal<User>(new NotLogged());

  private readonly path = API + '/users';

  constructor(
    private router: Router,
    private readonly http: HttpClient,
    private readonly utils: UtilsService,
  ) { }

  /**
   * almacena la token dada por el usuario and la guarda, permite al usuario pasar
   */
  login(email: string, password: string): void {
    const post = new NotLogged();
    post.email = email;
    post.password = password;
    this.http.post<{token: string; id: string}>(`${this.path}/login`, post).subscribe({
      next: ({ token, id }) => {
        this.isLogged.set(true);
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        this.fetchUserData(id).subscribe(response => this.user.set(response));
        this.router.navigate(['/menu']);
      },
      error: () => this.utils.showNotification('Usuario no encontrado'),
    });
  }

  /**
   * saca al usuario del sistema y borra de memoria local los datos de usuario
   */
  logout(): void {
    this.isLogged.set(false);
    this.router.navigate(['']);
    this.user.set(new NotLogged());
    localStorage.clear();
  }

  /**
   * solicita al servidor los datos del usuario y los almacena en memoria
   */
  fetchUserData(id: string) {
    return this.http.get<User>(`${this.path}/getOne/${id}`).pipe(
      map(response => {
        response.bornDate = new Date(response.bornDate);
        return response;
      })
    );
  }

  updateUser(newUser: User) {
    return this.http.put<void>(`${this.path}/update`, newUser);
  }

  changePassword(userid: string, password: string) {
    const path = `${this.path}/newPassword?password=${password}&id=${userid}`;
    return this.http.put<void>(path, null);
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.path}/getAll`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.path}/register`, user);
  }

  deleteAccount(userid: string) {
    return this.http.delete<void>(`${this.path}/delete/${userid}`);
  }
}
