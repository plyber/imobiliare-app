import { Component, Input } from '@angular/core';
import {Listing} from "../../../models/listing";
import {ScreenSizeService} from "../../../services/screen-size.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  @Input()
  estate: Listing = {
    id: 0,
    type:"",
    title: "",
    stars:0,
    description: "",
    sqm: 0,
    rooms: 0,
    bathrooms: 1,
    city: "",
    state: "",
    url: ""
  };

  constructor(
    private screenSizeService: ScreenSizeService
  ) {}

  get isMobile(){
    return this.screenSizeService.isMobile;
  }
  starsArray(count: number): number[] {
    return new Array(count);
  }

}
