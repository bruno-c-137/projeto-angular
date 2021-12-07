
import { Component, OnInit } from "@angular/core";
import { data } from "autoprefixer";

import { RequestLogin } from '../../../../resources/models/requestLogin';
import { LoginService } from '../../../../resources/services/login.service';
import { RegistroService } from '../../../../resources/services/registro.service';
import { AlertService } from '../../../../resources/services/alert.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public sign: number = 0;
  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }
  public doLogin(): void {
    // console.log(this.requestLogin);
    this.loginService.doLogin(this.requestLogin).subscribe((data) => {
      this.router.navigate(['dashboard'])

    },

      (error) => {
        this.alertService.error(error.error.message)


      })


  }

}