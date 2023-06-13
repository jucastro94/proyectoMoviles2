import { Component, Input } from '@angular/core';
import { RadioField } from '@models/field';

@Component({
  selector: 'app-radio-viewer',
  templateUrl: './radio-viewer.component.html',
  styleUrls: ['./radio-viewer.component.scss']
})
export class RadioViewerComponent {
  @Input() field = new RadioField();
}
