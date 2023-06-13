import { Component } from '@angular/core';
import { CheckboxField, Field, FieldType, RadioField, SelectorField, TextField } from '@models/field';
import { Form } from '@models/form';

type FieldDictionary<T> = {
  [x in FieldType]: T;
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
    author: '',
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

  readonly fieldIndex: FieldDictionary<Field> = {
    'text': new TextField(),
    'checkbox': new CheckboxField(),
    'radio': new RadioField(),
    'selector': new SelectorField(),
  };

  fieldTypes: {value: FieldType; label: string}[] = [
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

  invoke(value: string) {    
    const res = this.fieldIndex[value as FieldType] ?? new TextField();
    this.field = res;
  }

  add() {
    this.form.fields.push(this.field!);
    this.field = undefined;
  }

  test(data: any) {
    console.log(data);
  }
}
  