import { Component } from '@angular/core';

interface Form {
  id?: string;
  title: string;
  fields: Field[];
  author: string;
  creationDate: Date;
}

interface Field {
  label: string;
  type: FieldType;
  optional: boolean;
}

type FieldType = 'text' | 'date' | 'radio' | 'checkbox';

type FieldDictionary = {
  [x in FieldType]: Field;
} 

class TextField implements Field {
  label: string = '';
  type: 'text' = 'text';
  optional: boolean = false;
}

class CheckboxField implements Field {
  label: string = '';
  type: 'checkbox' = 'checkbox';
  optional: boolean = false;
  options: {label: string; value: string;}[] = [];
}


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  fields: Field[] = new Array();
  form!: Form;
  currentField!: Field;

  add(value: string) {
    const indexes: FieldDictionary = {
      'text': new TextField(),
      'checkbox': new CheckboxField(),
      'date': new TextField(),
      'radio': new TextField(),
    };
    
    const res = indexes[value as FieldType];
    if (!res) {
      throw new Error('a');
    }

    this.currentField = res;
  }
}
