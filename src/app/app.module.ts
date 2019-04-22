// import * as Hammer from "@types/hammerjs";
// import {Hammer} from 'hammerjs/hammer';
import 'hammerjs';

import {NgModule} from '@angular/core';
import {CookieService, CookieModule} from '@gorniv/ngx-universal';
import {DatePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LibModule} from './lib.module';
import {UniversalStorage} from '@lib/storage/universal.storage';

import {LoaderComponent} from '@_parts/loader/loader.component';
import {ScrollTopComponent} from '@_parts/scroll-top/scroll-top.component';
import {LoaderService} from '@_parts/loader/services/loader/loader.service';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {IndexPageComponent} from '@pages/index-page/index-page.component';
import {ErrorFormComponent} from '@lib/zform/_parts/error-form/error-form.component';
import {FormsModule} from '@angular/forms';
import {DatapickerModule} from './datapicker.module';
import {ZFormComponent} from '@lib/zform/zform.component';
import {ZFieldComponent} from '@lib/zform/zfield/zfield.component';
import {NotFoundPageComponent} from '@pages/not-found-page/not-found-page.component';
import {NgMasonryGridModule} from 'ng-masonry-grid';
import {HeaderComponent} from '@_parts/header/header.component';
import {FooterComponent} from '@_parts/footer/footer.component';
import {NewsFlashComponent} from '@pages/index-page/_parts/news-flash/news-flash.component';
import {WhyShouldComponent} from '@pages/index-page/_parts/why-should/why-should.component';
import {HowItWorksComponent} from '@pages/index-page/_parts/how-it-works/how-it-works.component';
import {TrackComponent} from '@pages/index-page/_parts/track/track.component';
import {VideoAreaComponent} from '@pages/index-page/_parts/video-area/video-area.component';
import {TestimonialsComponent} from '@pages/index-page/_parts/testimonials/testimonials.component';
import {PricingComponent} from '@pages/index-page/_parts/pricing/pricing.component';
import {DownloadComponent} from '@pages/index-page/_parts/download/download.component';
import {TopScreenComponent} from '@pages/index-page/_parts/top-screen/top-screen.component';
import {NguCarouselModule} from '@ngu/carousel';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        NgMasonryGridModule,
        BrowserTransferStateModule,
        AppRoutingModule,
        TransferHttpCacheModule,
        HttpClientModule,
        HttpModule,
        RouterModule,
        CommonModule,
        BrowserAnimationsModule,
        CookieModule.forRoot(),
        LibModule.forRoot(),
        FormsModule,
        DatapickerModule,

        NguCarouselModule,
        NgxHmCarouselModule,
    ],
    declarations: [
        AppComponent,

        LoaderComponent,
        ScrollTopComponent,
        LoaderComponent,
        ZFormComponent,
        ZFieldComponent,
        ErrorFormComponent,

        IndexPageComponent,
        NotFoundPageComponent,
        HeaderComponent,
        FooterComponent,
        NewsFlashComponent,
        WhyShouldComponent,
        HowItWorksComponent,
        TrackComponent,
        VideoAreaComponent,
        TestimonialsComponent,
        PricingComponent,
        DownloadComponent,
        TopScreenComponent,
    ],
    providers: [
        CookieService,
        UniversalStorage,
        DatePipe,
        LoaderService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
