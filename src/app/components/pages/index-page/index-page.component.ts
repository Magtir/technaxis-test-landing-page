import {Component, OnInit} from '@angular/core';
import {LoaderService} from '@_parts/loader/services/loader/loader.service';

@Component({
    selector: 'app-index',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.less'],
})
export class IndexPageComponent implements OnInit {

    constructor(public loaderService: LoaderService) {
    }

    ngOnInit() {
        this.loaderService.loaderOff();
    }
}
