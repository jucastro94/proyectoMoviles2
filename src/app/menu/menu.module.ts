import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
];

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatRippleModule,
    MatDividerModule,
  ],
})
export class MenuModule { }
