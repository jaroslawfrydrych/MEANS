import {Component, ContentChild, OnInit} from '@angular/core';
import {CardHeaderComponent} from '../card-header/card-header.component';
import {CardContentComponent} from '../card-content/card-content.component';
import {CardActionsComponent} from '../card-actions/card-actions.component';
import {CardFooterComponent} from '../card-footer/card-footer.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @ContentChild(CardHeaderComponent) public header: CardHeaderComponent;
    @ContentChild(CardContentComponent) public content: CardContentComponent;
    @ContentChild(CardActionsComponent) public actions: CardActionsComponent;
    @ContentChild(CardFooterComponent) public footer: CardFooterComponent;

    constructor() {
    }

    ngOnInit() {
    }

}
