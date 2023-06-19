import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectorField } from '@models/field';
import { onInputChange } from 'src/app/utilities/common';

@Component({
  selector: 'app-selector-editor',
  templateUrl: './selector-editor.component.html',
  styleUrls: ['./selector-editor.component.scss']
})
export class SelectorEditorComponent {
  @Input() field = new SelectorField();

  @Output()
  validityChange = new EventEmitter<boolean>();

  options = new Array<FormControl>();

  control = new FormControl(this.field.label, Validators.required);

  addOption() {
    this.options.push(new FormControl('', Validators.required));
  }

  changeInput(event: Event) {
    this.field.label = onInputChange(event);
    this.checkValidity();    
  }

  changeMultiple(event: Event, index: number) {
    this.field.options[index] = onInputChange(event);
    this.checkValidity();
  }

  checkValidity() {
    const foundInvalid = this.options.find(option => !option.valid);
    this.validityChange.emit(this.control.valid && !foundInvalid);
  }
}
