import {Component, Input, OnInit} from '@angular/core';
import {Listing} from "../../../models/listing";
import {ScreenSizeService} from "../../../services/screen-size.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input()
  estate: Listing = {
    authorId: '',
    id: 0,
    type: "",
    title: "",
    stars: 0,
    description: "",
    sqm: 0,
    rooms: 0,
    bathrooms: 1,
    city: "",
    state: "",
    url: ""
  };

  constructor(
    private screenSizeService: ScreenSizeService,
    private authService: AuthService,
  ) {
  }

  get isMobile() {
    return this.screenSizeService.isMobile;
  }
ngOnInit(){
}

  starsArray(count: number): number[] {
    return new Array(count);
  }

}
