import { Component, Input } from '@angular/core';
import { Field } from '@models/field';

@Component({
  selector: 'app-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.scss']
})
export class FieldEditorComponent {
  @Input() field?: Field;
}
