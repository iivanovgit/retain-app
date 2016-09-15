
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService {
    JWT_KEY: string = 'retain_token';

    constructor(private router: Router) {

    }

    isAuthorized(): Boolean {
        return Boolean(window.localStorage.getItem(this.JWT_KEY));
    }


    canActivate(): Boolean {
        const isAuth = this.isAuthorized();

        if (!isAuth) {
            this.router.navigate(['', 'auth']);
        }

        return isAuth;
    }
}
