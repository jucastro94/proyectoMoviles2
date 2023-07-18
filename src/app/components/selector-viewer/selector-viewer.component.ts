import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Dictionary } from '@models/dictionary';
import { SelectorField } from '@models/field';

@Component({
  selector: 'app-selector-viewer',
  templateUrl: './selector-viewer.component.html',
  styleUrls: ['./selector-viewer.component.scss']
})
export class SelectorViewerComponent {
  @Input()
  field = new SelectorField();

  @Output()
  change = new EventEmitter<string>();

  propagateChange(event: MatSelectChange) {
    const value = `${event.value}`;
    const response: Dictionary<string> = {};
    response[`${this.field.name}`] = value;

    this.change.emit(value);
    return response;
  }

}
