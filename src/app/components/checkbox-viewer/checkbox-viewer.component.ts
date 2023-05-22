import { Component, Input } from '@angular/core';
import { CheckboxField } from '@models/field';

@Component({
  selector: 'app-checkbox-viewer',
  templateUrl: './checkbox-viewer.component.html',
  styleUrls: ['./checkbox-viewer.component.scss']
})
export class CheckboxViewerComponent {
  @Input() field = new CheckboxField();
}
