import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Listing} from "../../../models/listing";
import {ScreenSizeService} from "../../../services/screen-size.service";
import {Subscription} from "rxjs";
import {DataStorageService} from "../../../services/data-storage.service";

@Component({
    selector: 'app-listing-page',
    templateUrl: './listing-page.component.html',
    styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit, OnDestroy {
    listing: Listing;
    subscription: Subscription;

    constructor(
        private dataStorageService: DataStorageService,
        private route: ActivatedRoute,
        private screenSizeService: ScreenSizeService,
    ) {
    }

    get isMobile() {
        return this.screenSizeService.isMobile;
    }

    ngOnInit() {
        this.subscription = this.route.paramMap.subscribe(params => {
            const selectedListingId = params.get('id');
            this.dataStorageService.getListingByID(selectedListingId).subscribe(listing => {
                this.listing = listing;
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
