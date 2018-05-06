import {Component, OnInit} from '@angular/core';
import {MenuService} from './layout/menu/menu/menu.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(public menuService: MenuService) {
    }

    ngOnInit() {
    }
}
