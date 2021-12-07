import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService,
        private userService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.userService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['login'], {
                queryParams: {
                  return: state.url
                }
              });
              return false;
        }
        
    }
    
    


}