import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Dictionary } from '@models/dictionary';
import { RadioField } from '@models/field';

@Component({
  selector: 'app-radio-viewer',
  templateUrl: './radio-viewer.component.html',
  styleUrls: ['./radio-viewer.component.scss']
})
export class RadioViewerComponent {
  @Input() field = new RadioField();

  @Output()
  change = new EventEmitter<string>();

  propagateChange(event: MatRadioChange) {
    const value = `${event.value}`;
    const result = value === 'true' ? value : 'false';
    const response: Dictionary<string> = {};
    response[`${this.field.name}`] = value;

    this.change.emit(result);
    return response;
  }

}
