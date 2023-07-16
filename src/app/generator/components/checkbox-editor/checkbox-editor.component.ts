import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CheckboxField } from '@models/field';
import { onInputChange, turnToValidFieldName } from 'src/app/utilities/common';

@Component({
  selector: 'app-checkbox-editor',
  templateUrl: './checkbox-editor.component.html',
  styleUrls: ['./checkbox-editor.component.scss']
})
export class CheckboxEditorComponent {
  @Input()
  field = new CheckboxField();

  control = new FormControl('', Validators.required);

  @Output()
  validityChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const value = onInputChange(event);
    this.field.label = value;
    this.field.name = turnToValidFieldName(value);
    this.validityChange.emit(this.control.valid);
  }
}
