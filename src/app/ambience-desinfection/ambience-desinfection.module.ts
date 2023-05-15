import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbienceDesinfectionComponent } from './ambience-desinfection.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: AmbienceDesinfectionComponent,
  },
];

@NgModule({
  declarations: [AmbienceDesinfectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class AmbienceDesinfectionModule { }
