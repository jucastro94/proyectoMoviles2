import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxField, Field, RadioField, SelectorField } from '@models/field';

@Component({
  selector: 'app-field-viewer',
  templateUrl: './field-viewer.component.html',
  styleUrls: ['./field-viewer.component.scss']
})
export class FieldViewerComponent {
  @Input()
  field!: Field;

  @Output()
  change = new EventEmitter<string>();


  CheckboxField = CheckboxField;
  RadioField = RadioField;
  SelectorField = SelectorField;

  sendValue(value: string) {
    this.change.emit(value);
  }
}
