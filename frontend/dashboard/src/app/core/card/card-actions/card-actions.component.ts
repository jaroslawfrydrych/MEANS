import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {ButtonComponent} from '../../buttons/button/button.component';

@Component({
    selector: 'app-card-actions',
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent implements OnInit, AfterContentInit {
    @ViewChild('actionsContent') public actionsContent: ElementRef;
    @ContentChildren(ButtonComponent) public buttons: QueryList<ButtonComponent>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.buttons
            .map((button: ButtonComponent) => {
                button.color = 'secondary';
                return button;
            });
    }
}
