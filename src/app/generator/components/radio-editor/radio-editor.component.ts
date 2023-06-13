import { Component, Input } from '@angular/core';
import { RadioField } from '@models/field';

@Component({
  selector: 'app-radio-editor',
  templateUrl: './radio-editor.component.html',
  styleUrls: ['./radio-editor.component.scss']
})
export class RadioEditorComponent {
  @Input() field = new RadioField();

  addOption() {
    this.field.options.push('');
  }

  setOptionValue(index: number, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.field.options[index] = inputValue;
    console.log(this.field.options, index);
  }
}
