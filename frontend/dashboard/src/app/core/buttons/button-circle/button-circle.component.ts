import {Component, forwardRef} from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
    selector: 'app-button-circle',
    templateUrl: './button-circle.component.html',
    styleUrls: ['./button-circle.component.scss'],
    providers: [
        {
            provide: ButtonComponent, useExisting: forwardRef(() => ButtonCircleComponent)
        }
    ]
})
export class ButtonCircleComponent extends ButtonComponent {

    constructor() {
        super();
    }

}
