import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  logged = this.service.user();

  // hardcoded data that should come from the contructor as API response
  private source: User[] = new Array();

  columns = ['No.', 'Nombre'];

  dataSource = new MatTableDataSource(this.source);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private service: AuthService) {
    this.service.getAllUsers().subscribe(data => {
      this.source = data;
      this.dataSource = new MatTableDataSource(this.source);
    });
  }
}
