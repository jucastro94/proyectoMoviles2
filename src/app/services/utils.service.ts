import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private snackbar: MatSnackBar) { }

  /**
   * mostrar una notificacion que durara 3 segundos y con un boton de OK dado un
   * mensaje.
   * @param message mensaje a mostrar en la notificacion
   */
  showNotification(message: string): void {
    this.snackbar.open(message, 'OK', {duration: 3000});
  }
}
