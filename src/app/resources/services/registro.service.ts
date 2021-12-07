import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestRegistro } from "../models/requestRegistro";



@Injectable({
    providedIn: 'root'
})
export class RegistroService {
    constructor(private httpClient: HttpClient,) { }

    public doRegistro(requestRegistro: RequestRegistro) {
        return this.httpClient
            .post('http://localhost:8080/api/auth/users', requestRegistro)

    }
}