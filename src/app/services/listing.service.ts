import {Injectable} from '@angular/core';
import {Listing} from "../models/listing";

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listings: Listing[] = []

  constructor() {
  }


  addListing(property:Listing){
    property.id=this.listings.length;
    property.stars=Math.floor(Math.random()*6)
    this.listings.push(property)
  }
  getListings(): Listing[] {
    return this.listings;
  }

  getListingByID(id: number): Listing | undefined {
    return this.listings.find(listing => listing.id === id);
  }
}
