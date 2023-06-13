import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReaderComponent } from './form-reader.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormReaderComponent,
  },
];

@NgModule({
  declarations: [
    FormReaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class FormReaderModule { }
