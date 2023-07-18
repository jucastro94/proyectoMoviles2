import { Component } from '@angular/core';
import { FormsService } from '../services/forms.service';
import { Answer } from '@models/answer';
import { Form } from '@models/form';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  source: Answer[][] = [];

  columns: Form[] = [];

  gotData = false;

  displayColumns: string[][] = [];

  constructor(private forms: FormsService, private utils: UtilsService) {
    this.forms.getAllForms().subscribe({
      next: data => {
        this.columns = data;
        data.forEach((form, index) => {
          const cols = form.fields.map(field => field.name)
          this.displayColumns[index] = ['author', 'creationDate', ...cols];
  
          this.forms.getEntriesByForm(form.name).subscribe({
            next: data => this.source.push(data),
            error: () => this.utils.showNotification('no se pudo traer los datos de ' + form.title),
          });
          this.gotData = true;
        }
      )},
    });
  }
}
