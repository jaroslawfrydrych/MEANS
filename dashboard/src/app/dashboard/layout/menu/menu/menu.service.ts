import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';

@Injectable(<any>{
    providedIn: 'root'
})
export class MenuService {
    private menuOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public menuOpen$: Observable<boolean> = this.menuOpenSubject.asObservable();

    constructor() {
    }

    public toggleMenu() {
        this.menuOpenSubject.next(!this.menuOpenSubject.getValue());
    }
}
