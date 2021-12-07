import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { HomeComponent } from './pages/unlogged/sites/home/home.component';

// ng generate module customers --route customers --module app.module
const routes: Routes = [
  
  
  {
    path: '', component: HomeComponent,

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/unlogged/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/logged/logged.module').then(m => m.LoggedModule),
    
  },
 
  // { path: '**', redirectTo: 'login ' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
