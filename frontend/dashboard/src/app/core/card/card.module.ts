import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {CardHeaderComponent} from './card-header/card-header.component';
import {CardContentComponent} from './card-content/card-content.component';

const COMPONENTS = [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class CardModule {
}
