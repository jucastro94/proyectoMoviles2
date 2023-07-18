import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Dictionary } from '@models/dictionary';
import { CheckboxField } from '@models/field';

@Component({
  selector: 'app-checkbox-viewer',
  templateUrl: './checkbox-viewer.component.html',
  styleUrls: ['./checkbox-viewer.component.scss']
})
export class CheckboxViewerComponent {
  @Input() 
  field = new CheckboxField();

  @Output()
  change = new EventEmitter<string>();

  propagateChange(event: MatCheckboxChange) {
    const value = `${event.checked}`;
    const response: Dictionary<string> = {};
    response[`${this.field.name}`] = value;

    this.change.emit(value);
    return response;
  }
}
