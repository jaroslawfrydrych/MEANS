import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-card-content',
    templateUrl: './card-content.component.html',
    styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
    @ViewChild('contentContent') public contentContent: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

}
