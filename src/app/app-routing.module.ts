import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { isLoggedGuard } from './guards/is-logged.guard';
import { notLoggedGuard } from './guards/not-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [notLoggedGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
    canActivate: [isLoggedGuard]
  },
  {
    path: 'forms',
    children: [
      {
        path: 'reader/:id',
        loadChildren: () => import('./form-reader/form-reader.module').then(m => m.FormReaderModule),
      },
      {
        path: 'generator',
        loadChildren: () => import('./generator/generator.module').then(m => m.GeneratorModule),
      },
    ]
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
