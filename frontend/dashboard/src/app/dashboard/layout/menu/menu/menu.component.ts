import {
    AfterViewInit, Component, ContentChildren, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild,
    ViewChildren
} from '@angular/core';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import {NavigationCancel, NavigationEnd, NavigationError, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {MenuService} from './menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input('parentPath') public parentPath: string = '';
    @ContentChildren(MenuItemComponent) public menuItems: QueryList<MenuItemComponent>;
    @ViewChild('marker') private marker: ElementRef;
    @ViewChildren('link') private linkElements: QueryList<ElementRef>;
    public markerOffset: number = 0;
    public markerActive: boolean = false;
    private routerEventSubscription: Subscription = new Subscription();

    constructor(private router: Router,
                public menuService: MenuService) {
    }

    ngOnInit() {
        this.routerEventSubscription = this.router.events
            .subscribe((routerEvent: any) => {
                this.onRouterEvent(routerEvent);
            });
    }

    ngAfterViewInit() {
        this.handleActiveElement();
    }

    private onRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.handleActiveElement();
        }
    }

    private handleActiveElement() {
        setTimeout(() => {
            let activeElement: ElementRef = this.linkElements
                .find((element: ElementRef | any) => {
                    return element.nativeElement.classList.contains('active');
                });

            if (!activeElement) {
                activeElement = this.linkElements.first;
                this.markerActive = false;
                return;
            }

            this.markerOffset = this.getMarkerOffset(activeElement.nativeElement);
            setTimeout(() => {
                this.markerActive = true;
            });
        });
    }

    private getMarkerOffset(target: any): number {
        return target.offsetTop + (target.offsetHeight / 2) - this.marker.nativeElement.clientHeight / 2;
    }

    ngOnDestroy() {
        if (this.routerEventSubscription) {
            this.routerEventSubscription.unsubscribe();
        }
    }

}
