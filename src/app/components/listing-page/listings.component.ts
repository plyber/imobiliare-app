import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/listing";
import {ListingService} from "../../services/listing.service";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  estateList: Listing[] = [];

  constructor(private listingService: ListingService) {
  }

  ngOnInit() {
    this.estateList = this.listingService.getListings()
  }


}
