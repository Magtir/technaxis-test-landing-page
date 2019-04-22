import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.less']
})
export class TestimonialsComponent implements OnInit {
    index = 1;
    slides = [
        {
            ava: '/assets/img/ava.png',
            name: 'Alexander Vanjuvic',
            rating: 4,
            comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
            'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ' +
            'illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
        {
            ava: '/assets/img/ava.png',
            name: 'Donald Wilson',
            rating: 5,
            comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
            'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ' +
            'illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
        {
            ava: '/assets/img/ava.png',
            name: 'Alexander Vanjuvic',
            rating: 3,
            comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
            'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ' +
            'illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
        {
            ava: '/assets/img/ava.png',
            name: 'Alexander Vanjuvic',
            rating: 1,
            comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
            'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ' +
            'illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
        {
            ava: '/assets/img/ava.png',
            name: 'Donald Wilson',
            rating: 5,
            comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
            'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ' +
            'illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
        {
            ava: '/assets/img/ava.png',
            name: 'Alexander Vanjuvic',
            rating: 4,
            comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ' +
            'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ' +
            'illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    prev() {
        if (this.index > 0) {
            this.index--;
        }
    }

    next() {
        if (this.index < this.slides.length - 1) {
            this.index++;
        }
    }
}
