import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about-page/about-page.component";
import {HomeComponent} from "./components/home-page/home-page.component";
import {ContactComponent} from "./components/contact-page/contact-page.component";
import {ListingsComponent} from "./components/listing-page/listings.component";
import {ListingPageComponent} from "./components/listing-page/listing-details/listing-page.component";
import {SignInComponent} from "./components/auth-components/sign-in/sign-in.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listings/:id', component: ListingPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'account', component: SignInComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
