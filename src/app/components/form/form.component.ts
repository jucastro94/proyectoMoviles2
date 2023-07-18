import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '@models/answer';
import { Form } from '@models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input()
  form!: Form;

  @Input()
  answer!: Answer;

  @Output()
  answerChange = new EventEmitter<Answer>();

  setValue(field: string, value: string) {
    this.answer[field] = value;
  }
}
