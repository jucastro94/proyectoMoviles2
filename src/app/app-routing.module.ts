import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
  },
  {
    path: 'forms/washHands',
    loadChildren: () => import('./wash-hands/wash-hands.module').then(m => m.WashHandsModule),
  },
  {
    path: 'forms/reportSymptoms',
    loadChildren: () => import('./report-symptoms/report-symptoms.module').then(m => m.ReportSymptomsModule),
  },
  {
    path: 'forms/ambienceDesinfection',
    loadChildren: () => import('./ambience-desinfection/ambience-desinfection.module').then(m => m.AmbienceDesinfectionModule),
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module'). then(m => m.ReportsModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
