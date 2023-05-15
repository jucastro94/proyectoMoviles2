import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  // hardcoded data that should come from the contructor as API response
  private source = [
    {
      name: 'mike',
      id: '12111',
    },
    {
      name: 'no c',
      id: '2543',
    },
  ];

  columns = ['No.', 'Nombre'];

  dataSource = new MatTableDataSource(this.source);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
