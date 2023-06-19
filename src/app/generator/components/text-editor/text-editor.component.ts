import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Field, TextField } from '@models/field';
import { onInputChange } from 'src/app/utilities/common';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  @Input() field: Field = new TextField();

  @Output()
  validityChange = new EventEmitter<boolean>();

  control = new FormGroup({
    label: new FormControl(this.field.label, Validators.required),
    optional: new FormControl(false)
  });

  onChange(event: Event) {
    this.field.label = onInputChange(event);
    this.validityChange.emit(this.control.valid);
  }
}
