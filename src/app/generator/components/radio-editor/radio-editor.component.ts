import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RadioField } from '@models/field';
import { turnToValidFieldName } from 'src/app/utilities/common';

@Component({
  selector: 'app-radio-editor',
  templateUrl: './radio-editor.component.html',
  styleUrls: ['./radio-editor.component.scss']
})
export class RadioEditorComponent {
  @Input() field = new RadioField();

  @Output()
  validityChange = new EventEmitter<boolean>();

  options = new Array<FormControl>();

  control = new FormControl('', Validators.required);

  addOption() {
    this.options.push(new FormControl('', Validators.required));
    this.field.options.push('');
  }

  setOptionValue(index: number, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.field.options[index] = inputValue;
    const foundInvalid = this.options.find(option => !option.valid);
    this.validityChange.emit(!foundInvalid);
  }

  setName() {
    const label = this.control.value;
    if (label) {
      const name = turnToValidFieldName(label);
      this.field.name = name
      this.field.label = label;
    }
  }
  
}
