import {AfterContentInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {
    @ContentChildren(MenuItemComponent) public menuItems: QueryList<MenuItemComponent>;
    @ViewChild('marker') private marker: ElementRef;
    public markerOffset: number = 0;

    constructor() {
    }

    ngAfterContentInit() {
    }

    public onMouseOver(event: any) {
        this.markerOffset = event.target.offsetTop - this.marker.nativeElement.clientHeight / 2;
    }

}
