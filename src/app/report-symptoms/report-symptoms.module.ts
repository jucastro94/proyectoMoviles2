import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportSymptomsComponent } from './report-symptoms.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: ReportSymptomsComponent,
  }
];

@NgModule({
  declarations: [ReportSymptomsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatCheckboxModule,
  ]
})
export class ReportSymptomsModule { }
