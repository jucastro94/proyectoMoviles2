import { Component, Input } from '@angular/core';
import { SelectorField } from '@models/field';

@Component({
  selector: 'app-selector-editor',
  templateUrl: './selector-editor.component.html',
  styleUrls: ['./selector-editor.component.scss']
})
export class SelectorEditorComponent {
  @Input() field = new SelectorField();

  value = '';

  addOption() {
    this.field.options.push(this.value);
    this.value = '';
  }
}
