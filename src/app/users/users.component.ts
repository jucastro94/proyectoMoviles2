import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  // hardcoded data that should come from the contructor as API response
  private source: User[] = new Array();

  columns = ['No.', 'Nombre'];

  dataSource = new MatTableDataSource(this.source);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
