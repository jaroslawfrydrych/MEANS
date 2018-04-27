import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {
    @ContentChildren(MenuItemComponent) public menuItems: QueryList<MenuItemComponent>;

    constructor() {
    }

    ngAfterContentInit() {
    }

}
