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
import { ListingPageComponent } from './components/listing-page/listing-details/listing-page.component';
import { CreateListingComponent } from './components/listing-page/create-listing/create-listing.component';
import {FormsModule} from "@angular/forms";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFireModule} from "@angular/fire/compat";
import { SignInComponent } from './components/auth-components/sign-in/sign-in.component';
import { IconComponent } from './shared/icon/icon.component';
import { DashboardComponent } from './components/auth-components/dashboard/dashboard.component';

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
    CreateListingComponent,
    SignInComponent,
    IconComponent,
    IconComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
