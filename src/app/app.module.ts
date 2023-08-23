import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about-page/about-page.component';
import { ContactComponent } from './components/contact-page/contact-page.component';
import { ListingsComponent } from './components/listing-page/listings.component';
import {NgOptimizedImage} from "@angular/common";
import { ListingComponent } from './components/listing-page/listing/listing.component';
import { ListingPageComponent } from './components/listing-page/listing-page/listing-page.component';
import { CreateListingComponent } from './components/listing-page/create-listing/create-listing.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ListingsComponent,
    ListingComponent,
    ListingPageComponent,
    CreateListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
