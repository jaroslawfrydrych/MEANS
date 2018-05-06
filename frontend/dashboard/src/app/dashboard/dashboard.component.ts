import {Component, OnInit} from '@angular/core';
import {MenuService} from './layout/menu/menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CoreService} from '../core/core.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(public menuService: MenuService,
                private coreService: CoreService,
                private router: Router) {
    }

    ngOnInit() {
        if(this.router.url === '/') {
            this.router.navigate([this.coreService.homePage]);
        }
    }
}
