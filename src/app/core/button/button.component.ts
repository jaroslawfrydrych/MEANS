import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() public type: string = 'button';
    @Input() public disabled: boolean = false;
    public clicked: boolean = false;

    @HostListener('click', ['$event']) onHostClick(event: Event) {
        event.preventDefault();
        event.stopPropagation();
    }

    @Output('click') click: EventEmitter<null> = new EventEmitter<null>();

    constructor() {
    }

    onClick(event: Event) {
        this.click.emit(null);
        this.clicked = true;
        setTimeout(() => {
            this.clicked = false;
        }, );
    }

}
