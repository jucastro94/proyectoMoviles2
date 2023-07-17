import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckboxField, Field, FieldType, RadioField, SelectorField, TextField } from '@models/field';
import { Form } from '@models/form';
import { AuthService } from '../services/auth.service';
import { onInputChange, turnToValidFieldName } from '../utilities/common';
import { Answer } from '@models/answer';
import { FormsService } from '../services/forms.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';

type FieldDictionary<T> = {
  [x in FieldType]: T;
}

type FormError = {
  message: string;
  error: string;
}

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  turnToValid = turnToValidFieldName;

  /**
   * formulario creado
   */
  form: Form = {
    title: '',
    fields: [],
    author: this.auth.user()._id!,
    creationDate: new Date(),
    allowed: [],
    name: '',
  };

  answer: Answer = {
    author: this.auth.user()._id!,
    form: '',
    creationDate: new Date(),
  };

  /**
   * el campo siendo creado actualmente
   */
  field?: Field;

  /**
   * mantener el memoria el tipo de campo que se quiere crear
   */
  selected: string = '';

  /**
   * helper para obtener el tipo de campo a crear, no se usa en templates
   */
  readonly fieldIndex: FieldDictionary<Field> = {
    'text': new TextField(),
    'checkbox': new CheckboxField(),
    'radio': new RadioField(),
    'selector': new SelectorField(),
  };

  /**
   * helper para mostrar en el template cuales empleados pueden verlo
   */
  readonly permissionIndex = [
    {
      label: 'Todos',
      value: ['Administrador', 'Empleado'],
    },
    {
      label: 'Empleado',
      value: ['Empleado'],
    },
    {
      label: 'Empleado',
      value: ['Administrador'],
    },
  ];

  /**
   * indice para imprimir de manera legible para el usuario los tipos de campos que 
   * se soportan
   */
  readonly fieldTypes: {value: FieldType; label: string}[] = [
    {
      value: 'text',
      label: 'Texto corto',
    },
    {
      value: 'checkbox',
      label: 'Casilla de marcar',
    },
    {
      value: 'radio',
      label: 'Opcion unica',
    },
    {
      value: 'selector',
      label: 'Seleccion',
    },
  ];

  onInputChange = onInputChange;

  /**
   * formGroup para el formulario que permite configurar el formulario que se quiere crear.
   */
  formControl = this.builder.group({
    title: ['', Validators.compose([
      Validators.required,
      Validators.minLength(2),
    ])],
  });

  formControlErrors: FormError[] = [
    {error: 'required', message: 'Este campo es requerido'}, 
    {error: 'minlength', message: 'Minimo 2 caracteres'},
  ];

  constructor(
    private builder: FormBuilder,
    private auth: AuthService,
    private forms: FormsService,
    private utils: UtilsService,
    private router: Router,
  ) { }

  /**
   * crea una instancia de tipo de campo para pasar como datos al componente que
   * lo usara.
   * @param value nombre del tipo que campo que se quiere
   */
  invoke(value: string) {    
    const res = this.fieldIndex[value as FieldType] ?? new TextField();
    this.field = res;
  }

  /**
   * agregar a los campos del formulario el campo que se esta creando
   */
  add() {
    const entry = Object.assign({}, this.field!);
    this.form.fields.push(entry);
    this.field = undefined;
  }

  /**
   * enviar al servidor el objeto con la estructura del formulario
   */
  submit() {
    this.forms.createForm(this.form).subscribe({
      next: () => {
        this.utils.showNotification('formulario creado');
        this.router.navigate(['/menu']);
      },
      error: () => this.utils.showNotification('no se pudo crear el formulario'),
    });
  }

  getErrorMessage(group: FormGroup, errors: FormError[]): string {
    for (const error of errors) {
      if (group.hasError(error.error)) {
        return error.message;
      }
    }
    return '';
  }

}
