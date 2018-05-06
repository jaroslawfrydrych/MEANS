import {Component, OnInit} from '@angular/core';
import {CoreService} from '../../core/core.service';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
    public homePagePath: string = '/';

    constructor(private coreService: CoreService) {
    }

    ngOnInit() {
        this.homePagePath = this.coreService.homePage;
    }

}
