import {Component, OnInit} from '@angular/core';
import {LoaderService} from '@_parts/loader/services/loader/loader.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.less']
})
export class NotFoundPageComponent implements OnInit {

    constructor(public ls: LoaderService) {
    }

    ngOnInit() {
        this.ls.loaderOff();
    }

}
