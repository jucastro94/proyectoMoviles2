import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WashHandsComponent } from './wash-hands.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: WashHandsComponent,
  }
];

@NgModule({
  declarations: [WashHandsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ]
})
export class WashHandsModule { }
