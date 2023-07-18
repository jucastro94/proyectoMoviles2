import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'; 
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table'; 
import { FormBuilderModule } from '../shared/form-builder.module';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
  },
];

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatTabsModule,
    MatTableModule,
    FormBuilderModule,
    MatTableModule,
  ],
})
export class ReportsModule { }
