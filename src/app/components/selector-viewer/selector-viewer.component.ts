import { Component, Input } from '@angular/core';
import { SelectorField } from '@models/field';

@Component({
  selector: 'app-selector-viewer',
  templateUrl: './selector-viewer.component.html',
  styleUrls: ['./selector-viewer.component.scss']
})
export class SelectorViewerComponent {
  @Input() field = new SelectorField();
}
