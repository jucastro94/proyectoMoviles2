import { Component } from '@angular/core';
import { FormsService } from '../services/forms.service';
import { Answer } from '@models/answer';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  source: Answer[] = [];

  columns: string[] = [];

  constructor(private forms: FormsService) {
    this.forms.getAllForms().subscribe(data => {
      data.forEach(form => this.columns.push(form.title));
    });
  }
}
