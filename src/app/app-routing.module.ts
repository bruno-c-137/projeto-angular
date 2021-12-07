import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { HomeComponent } from './pages/unlogged/sites/home/home.component';
import { SitesModule } from './pages/unlogged/sites/sites.module';

// ng generate module customers --route customers --module app.module
const routes: Routes = [


  {
    path: '',
    loadChildren: () => import('./pages/unlogged/sites/sites.module').then(m => m.SitesModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/unlogged/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/logged/logged.module').then(m => m.LoggedModule),
    canActivate: [AuthGuardService],
  },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
