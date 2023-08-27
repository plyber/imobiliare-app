import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Listing} from "../../../models/listing";
import {ListingService} from "../../../services/listing.service";
import {DataStorageService} from "../../../services/data-storage.service";
import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-create-listing',
    templateUrl: './create-listing.component.html',
    styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent{

    @ViewChild('form') form: NgForm;
    sub: Subscription;
    propertyTypes: string[] = ['land', 'apartment', 'villa', 'commercial'];

    constructor(
        private listingService: ListingService,
        private dataStorageService: DataStorageService,
        private authService: AuthService) {
    }

    testFill() {
        this.form.form.patchValue({
            type: this.propertyTypes[Math.floor(Math.random() * this.propertyTypes.length + 1)],
            title: 'A flipper',
            description: `Where there's water on Earth, you find life as we know it. So if you find water somewhere else, it becomes a remarkable draw to look closer to see if life of any kind is there, even if it's bacterial, which would be extraordinary for the field of biology.
I don't want to be the embarrassment of the galaxy to have had the power to deflect an asteroid, and then not and end up going extinct. We'd be the laughingstock of the aliens of the cosmos if that were the case.
I have a personal philosophy in life: If somebody else can do something that I'm doing, they should do it. And what I want to do is find things that would represent a unique contribution to the world - the contribution that only I, and my portfolio of talents, can make happen. Those are my priorities in life.
I'm often asked - and occasionally in an accusatory way - 'Are you atheist?' And it's like, 'You know, the only 'ist' I am is a scientist, all right?' I don't associate with movements. I'm not an 'ism.' I just - I think for myself.`,
            sqm: Math.floor(Math.random() * 500),
            rooms: Math.floor((Math.random() * 5) + 1),
            bathrooms: Math.floor((Math.random() * 2) + 1),
            city: 'Galați',
            state: 'România din păcate',
            url: "https://media.istockphoto.com/id/538509975/photo/ruined-shed.jpg?s=612x612&w=0&k=20&c=795nNk41Bptp9OBADrv7ZrowKrFWqntT1SmKRISr7ps=",
        })
    }

    submitForm(formValue: Listing) {
        this.sub = this.authService.getCurrentUser().subscribe(user => {
            if (user) {
                const newListing = {
                    ...formValue,
                    authorId: user.uid,
                };
                this.dataStorageService.addListing(newListing)
                this.sub.unsubscribe()
            }
        });
    }

}
