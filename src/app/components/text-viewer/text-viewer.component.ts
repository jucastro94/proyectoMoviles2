import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Dictionary } from '@models/dictionary';
import { TextField } from '@models/field';
import { onInputChange } from 'src/app/utilities/common';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent {
  @Input()
  field = new TextField();

  @Output()
  change = new EventEmitter<string>();

  control = new FormControl('', Validators.required);

  propagateChange(event: Event) {
    const value = onInputChange(event);
    const response: Dictionary<string> = {};
    response[`${this.field.name}`] = value;

    this.change.emit(value);
    return response;
  }
}
