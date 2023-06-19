import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sampleForms } from '../utilities/constants';
import { UtilsService } from '../services/utils.service';
import { Form } from '@models/form';

@Component({
  selector: 'app-form-reader',
  templateUrl: './form-reader.component.html',
  styleUrls: ['./form-reader.component.scss']
})
export class FormReaderComponent {

  form?: Form;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utils: UtilsService,
  ) {
    this.route.params.subscribe(params => {
      const id = params['nameId'];
      const form = sampleForms[id] as Form;
      if (!form) {
        this.utils.showNotification('Este formulario no existe');
        this.router.navigate(['/menu']);
        return;
      }

      this.form = form;
    });
  }

}
