import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RadioField } from '@models/field';

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

}
