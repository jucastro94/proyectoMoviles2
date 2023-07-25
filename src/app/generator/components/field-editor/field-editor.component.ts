import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field, CheckboxField, RadioField, SelectorField, TextField } from '@models/field';

@Component({
  selector: 'app-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.scss']
})
export class FieldEditorComponent {
  @Input() field!: Field;

  @Output()
  validityChange = new EventEmitter<boolean>();

  TextField = TextField;
  CheckboxField = CheckboxField;
  RadioField = RadioField;
  SelectorField = SelectorField;

  isValid = false;

  validityHasChanged(value: boolean) {
    this.isValid = value;
    this.validityChange.emit(this.isValid);
  }
}
