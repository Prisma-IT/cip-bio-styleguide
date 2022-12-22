import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FullWidthComponent } from './full-width/full-width.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HighlightService } from './services/highlight.service';
import { ForAllComponent } from './shared/for-all/for-all.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { AlsoWatchComponent } from './shared/also-watch/also-watch.component';
import { StayConnectedComponent } from './shared/stay-connected/stay-connected.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProductsComponent } from './products/products.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedPageComponent } from './featured-page/featured-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FullWidthComponent,
    CarouselComponent,
    ForAllComponent,
    HomeProductsComponent,
    AlsoWatchComponent,
    StayConnectedComponent,
    FooterComponent,
    ProductsPageComponent,
    BreadcrumbsComponent,
    ProductsComponent,
    FeaturedComponent,
    FeaturedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
