import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-card-footer',
    templateUrl: './card-footer.component.html',
    styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {
    @ViewChild('footerContent') public footerContent: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

}
