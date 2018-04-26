import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit, AfterContentInit {

    @Input() public path: String = '';
    @Input() public label: String = '';
    @ViewChild('menuItemContent') menuItemContent: ElementRef;
    @ViewChild('subMenuItemsContent') subMenuItemsContent: ElementRef;
    @ContentChildren(MenuItemComponent) menuItemsContent: QueryList<MenuItemComponent>;
    public menuItems: Array<MenuItemComponent>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.menuItems = this.menuItemsContent.filter((item, index) => {
            return index > 0;
        });

        console.log(this.menuItems);
    }

}
