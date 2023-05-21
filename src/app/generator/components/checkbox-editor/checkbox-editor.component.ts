import { Component, Input } from '@angular/core';
import { CheckboxField, Field } from '@models/field';

@Component({
  selector: 'app-checkbox-editor',
  templateUrl: './checkbox-editor.component.html',
  styleUrls: ['./checkbox-editor.component.scss']
})
export class CheckboxEditorComponent {
  @Input() field = new CheckboxField();

  value: string = 'a';

}
