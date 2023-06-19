import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './generator.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilderModule } from '../shared/form-builder.module';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent,
  }
];

@NgModule({
  declarations: [
    GeneratorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDividerModule,
    FormBuilderModule,
  ],
})
export class GeneratorModule { }
