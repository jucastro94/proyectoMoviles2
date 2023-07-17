import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { Form } from '@models/form';
import { Answer } from '@models/answer';
import { AuthService } from '../services/auth.service';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-form-reader',
  templateUrl: './form-reader.component.html',
  styleUrls: ['./form-reader.component.scss']
})
export class FormReaderComponent {

  form?: Form;

  answer?: Answer;

  user = this.auth.user;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utils: UtilsService,
    private auth: AuthService,
    private forms: FormsService
  ) {
    this.route.params.subscribe(params => {
      const id: string = params['nameId'];
      this.forms.getFormByName(id).subscribe({
        next: (form) => {
          this.form = form;
          this.createAnswer(this.form);    
        },
        error: () => {
          this.utils.showNotification('Este formulario no existe');
          this.router.navigate(['/menu']);  
        }
      });
    });
  }

  createAnswer(form: Form): Answer {
    this.answer = {
      form: form.name,
      creationDate: new Date(),
      author: this.user()._id!,
    };

    for (const field of form.fields) {
      this.answer[field.name] = '';
    }
    return this.answer;
  }

  submit() {
    console.log(this.answer);
  }

}
