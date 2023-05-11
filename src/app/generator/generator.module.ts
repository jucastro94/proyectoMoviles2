import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator.component';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent,
  }
];

@NgModule({
  declarations: [GeneratorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GeneratorModule { }
