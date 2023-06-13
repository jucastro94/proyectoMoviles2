import { Component, Input } from '@angular/core';
import { Field, TextField } from '@models/field';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  @Input() field: Field = new TextField();
}
