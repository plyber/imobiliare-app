import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListingService} from "../../../services/listing.service";
import {ActivatedRoute} from "@angular/router";
import {Listing} from "../../../models/listing";
import {ScreenSizeService} from "../../../services/screen-size.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-listing-page',
    templateUrl: './listing-page.component.html',
    styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit, OnDestroy {
    listing: Listing | undefined;
    selectedListingId: number | null = null;
    subscription: Subscription;

    constructor(
        private listingService: ListingService,
        private route: ActivatedRoute,
        private screenSizeService: ScreenSizeService,
    ) {
    }

    get isMobile() {
        return this.screenSizeService.isMobile;
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.selectedListingId = +params['id'];
            this.listing = this.listingService.getListingByID(this.selectedListingId);
            console.log(this.listing)
        });
    }

    ngOnDestroy() {
    this.subscription.unsubscribe();
    }
}
