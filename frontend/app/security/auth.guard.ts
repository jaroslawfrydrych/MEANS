import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user/user.service';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private userService: UserService) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.checkCurrentUser()
            .pipe(map((value: boolean) => {
                if (!value) {
                    this.router.navigate(['/']);
                }
                return value;
            }));
    }
}
