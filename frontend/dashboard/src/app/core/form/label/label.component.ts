import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

    @Input('label') label: string = null;

    constructor() {
    }

    ngOnInit() {
    }

}
