import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  source = [
    {
      name: 'a',
      lastname: 'a'
    },
    {
      name: 'b',
      lastname: 'b'
    },
  ];

  columns = ['No.', 'Nombre'];
}
