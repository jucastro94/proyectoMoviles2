import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list'; 

const modules = [
  HttpClientModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatCardModule,
  MatListModule,
]

/**
 * common task-related stuff used across the entire app
 */
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: [],
})
export class SharedModule { }
