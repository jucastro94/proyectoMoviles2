import { Component, Input } from '@angular/core';
import { CheckboxField, Field, RadioField, SelectorField } from '@models/field';

@Component({
  selector: 'app-field-viewer',
  templateUrl: './field-viewer.component.html',
  styleUrls: ['./field-viewer.component.scss']
})
export class FieldViewerComponent {
  @Input() field!: Field;

  CheckboxField = CheckboxField;
  RadioField = RadioField;
  SelectorField = SelectorField;
}
