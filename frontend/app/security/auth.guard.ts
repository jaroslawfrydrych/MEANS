import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private userService: UserService) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.checkCurrentUser()
            .map((value: boolean) => {
                if (!value) {
                    this.router.navigate(['/']);
                }
                return value;
            });
    }
}
