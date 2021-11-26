import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,


  ]


})
export class LoginModule { }
