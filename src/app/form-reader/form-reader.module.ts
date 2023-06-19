import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReaderComponent } from './form-reader.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormBuilderModule } from '../shared/form-builder.module';

const routes: Routes = [
  {
    path: '',
    component: FormReaderComponent,
  },
];

@NgModule({
  declarations: [
    FormReaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormBuilderModule,
  ],
})
export class FormReaderModule { }
