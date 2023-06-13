import { Component, Input } from '@angular/core';
import { TextField } from '@models/field';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss']
})
export class TextViewerComponent {
  @Input() field = new TextField();
}
