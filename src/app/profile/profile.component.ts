import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { Employee, User } from '@models/user';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  private readonly passwordConfirmed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let validate = false;
    const newPassword = this.passwordManager.controls.newPassword.value
    if (newPassword) {
      validate = newPassword === control.value;
    }
    return !validate ? { forbidden: { value: control.value } } : null;
  };

  loggedUser?: User;

  showDelete = false;

  control: FormGroup = this.builder.group({
    id: [{ value: null }],
    role: [{ value: null, disabled: true }],
    name: [null],
    lastname: [null],
    email: [null],
    bornDate: [null],
    position: [{value: null, disabled: true}],
    document: [null],
    manageUsers: false,
    watchReports: false,
    access: true,
  });

  passwordManager = this.builder.group({
    oldPassword: [null, Validators.required],
    newPassword: [null, Validators.required],
    confirmPassword: [null, Validators.required],
  });

  isNew = false;
  
  
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private utils: UtilsService,
    private router: Router,
    private builder: FormBuilder,
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const thisUser = this.authService.user();

        // cambiar comportamiento si la ruta es para un nuevo usuario
        if (id === 'new') {
          this.isNew = true;
          this.loggedUser = new Employee();
          this.giveControlValue(this.loggedUser);
          return;
        }

        // revisar que el perfil que se esta visitando es el mismo del logeado
        if (id === thisUser._id) {
          this.loggedUser = this.authService.user();
          this.giveControlValue(this.loggedUser);
          return;
        }

        // revisar que el usuario logeado tenga permisos de administrador de usuarios
        if (!thisUser.role.manageUsers) {
          this.utils.showNotification('no esta autorizado a ver este perfil');
          this.router.navigate(['/menu']);
          return;
        }

        // traer los datos de usuario
        this.authService.fetchUserData(id).subscribe({
          next: data => {
            this.loggedUser = data;
            this.showDelete = true;
            this.giveControlValue(this.loggedUser);
          },
          error: err => {
            this.utils.showNotification('perfil no se encuentra');
            console.log(err);
            this.router.navigate(['/menu']);
          }
        })
      }
    });
  }

  giveControlValue(user: User) {
    this.control = this.builder.group({
      id: [user._id],
      role: [{ value: user.role.roleName, disabled: !this.isNew }],
      name: [user.name],
      typeDocument: [{value: user.typeDocument, disabled: !this.isNew}],
      email: [user.email],
      bornDate: [user.bornDate],
      position: [{value: user.role.position, disabled: !this.isNew}],
      lastname: [user.lastname],
      document: [user.document],
      manageUsers: [user.role.manageUsers],
      watchReports: [user.role.watchReports],
      access: true,
    });
  }

  modifyBody() {
    const { id, name, lastname, email, bornDate } = this.control.value;
    this.authService.fetchUserData(id).subscribe(data => {
      data.name = name;
      data.lastname = lastname;
      data.email = email;
      data.bornDate = bornDate;

      this.authService.updateUser(data).subscribe({
        next: () => {
          this.utils.showNotification('actualizado')
          if (id === this.authService.user()._id) {
            this.authService.user.set(data);
          }
        },
        error: () => this.utils.showNotification('no se pudo actualizar'),
      });
    });
  }

  changePassword() {
    const { id } = this.control.value;
    const { newPassword } = this.passwordManager.value;
    if (newPassword) {
      this.authService.changePassword(id, newPassword!).subscribe({
        next: () => this.utils.showNotification('actualizado'),
        error: () => this.utils.showNotification('no se pudo actualizar'),
      });
    }
  }

  createBody() {
    const user = this.extractFormValues();
    this.authService.createUser(user).subscribe({
      next: () => {
        this.utils.showNotification('created');
        this.router.navigate(['/users']);
      },
      error: () => this.utils.showNotification('el servidor no pudo aceptar la peticion'),
    });
  }

  extractFormValues(): User {
    const formValues = this.control.value;
    const user: User = {
      email: formValues.email,
      password: 'abc123',
      document: formValues.document,
      typeDocument: formValues.typeDocument,
      name: formValues.name,
      lastname: formValues.lastname,
      role: {
        roleName: formValues.role,
        manageUsers: formValues.manageUsers,
        watchReports: formValues.watchReports,
        access: formValues.access,
        position: formValues.position,
      },
      bornDate: new Date(formValues.bornDate),
    };
    return user;
  }

  deleteUser() {
    const { id } = this.control.value;
    if (id && !this.isNew) {
      this.authService.deleteAccount(id);
    }
  }
}
