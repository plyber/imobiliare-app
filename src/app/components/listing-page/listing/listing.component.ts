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
    name: "Casa super ieftină",
    stars: 5,
    description: "Super șmechera ieftină ia-mi-o drecu odată de pe cap, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    sqm: 50,
    rooms: 3,
    bathrooms: 1,
    city: "Dumbrăvița",
    state: "România",
    url: "https://www.mydomaine.com/thmb/qfc13qpHnxMkqp8Ja-XwYjC1JQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
  };

  constructor(
    private screenSizeService: ScreenSizeService
  ) {}

  get isMobile(){
    return this.screenSizeService.isMobile;
  }

}
