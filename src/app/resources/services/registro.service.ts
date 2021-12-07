import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestLogin } from '../models/requestLogin';
import { ResponseLogin } from "../models/responseLogin";
import { tap } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class RegistroService {
    constructor(private httpClient: HttpClient,
        private authService: AuthService) { }

    public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
        return this.httpClient
            .post<ResponseLogin>('http://localhost:8080/api/auth/1', requestLogin)
            .pipe(
                tap((jwt) => (this.authService.loginResponse = jwt)));
    }
}