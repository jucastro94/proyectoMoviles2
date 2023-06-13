import { Component, Input } from '@angular/core';
import { Form } from '@models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input() form!: Form;
}
