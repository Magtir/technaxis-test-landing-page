import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {LoaderService} from '@_parts/loader/services/loader/loader.service';
import {AppInitService} from './app.init.service';
import {routes} from '@services/routes/routes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    // preserveWhitespaces: true
})
export class AppComponent implements OnInit {
    r = routes;

    constructor(private router: Router,
                public ls: LoaderService,
    ) {
    }

    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };

        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                // this.router.navigated = false;
                if (!window.location.hash) {
                    window.scrollTo(0, 0);
                    this.ls.loader = true;
                }
            }
        });
    }
}
