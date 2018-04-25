import {Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

    @Input() public path: String = '';
    @ViewChild('menuItemContent') menuItemContent: ElementRef;
    @ContentChildren(MenuItemComponent) subMenuItems: QueryList<MenuItemComponent>;

    constructor() {
    }

    ngOnInit() {
    }

}
