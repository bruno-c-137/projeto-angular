import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ng generate module customers --route customers --module app.module
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/unlogged/sites/sites.module').then(m => m.SitesModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/unlogged/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/logged/logged.module').then(m => m.LoggedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
