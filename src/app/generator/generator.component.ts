import { Component, signal } from '@angular/core';
import { CheckboxField, Field, FieldType, TextField } from '../models/field';
import { Form } from '@models/form';

type FieldDictionary = {
  [x in FieldType]: Field;
}

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  /**
   * form being created
   */
  form: Form = {
    title: '',
    fields: [],
    author: '',
    creationDate: new Date(),
  };

  /**
   * the current field being edited
   */
  field?: Field;

  /**
   * hold the type of input selected
   */
  selected: string = '';

  invoke(value: string) {
    const indexes: FieldDictionary = {
      'text': new TextField(),
      'checkbox': new CheckboxField(),
    };
    
    const res = indexes[value as FieldType] ?? new TextField();
    this.field = res;
  }

  add() {
    this.form.fields.push(this.field!);
    this.field = undefined;
  }
}
