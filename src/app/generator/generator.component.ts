import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckboxField, Field, FieldType, RadioField, SelectorField, TextField } from '@models/field';
import { Form } from '@models/form';
import { AuthService } from '../services/auth.service';
import { Admin, Employee } from '@models/user';
import { onInputChange } from '../utilities/common';
import { FieldEditorComponent } from './components/field-editor/field-editor.component';

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

  /**
   * formulario creado
   */
  form: Form = {
    title: '',
    fields: [],
    author: this.auth.user().name,
    creationDate: new Date(),
    allowed: [],
    url: '',
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
    allowed: [null, Validators.required],
  });

  formControlErrors: FormError[] = [
    {error: 'required', message: 'Este campo es requerido'}, 
    {error: 'minlength', message: 'Minimo 2 caracteres'},
  ];

  constructor(
    private builder: FormBuilder,
    private auth: AuthService,
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
    console.log(this.form);
    throw new Error('TODO');
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
