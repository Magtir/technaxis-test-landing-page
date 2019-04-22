import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-video-area',
    templateUrl: './video-area.component.html',
    styleUrls: ['./video-area.component.less']
})
export class VideoAreaComponent implements OnInit {

    addIframe = false;

    constructor() {
    }

    ngOnInit() {
    }

    play(el) {
        if (!this.addIframe) {
            el.innerHTML =
                `<iframe width="560" height="315" src="https://www.youtube.com/embed/a4fv-BtzNmY?start=2137&autoplay=1" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>`;

            this.addIframe = true;
        }
    }
}
