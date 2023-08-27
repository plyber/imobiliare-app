import {Component, OnInit} from '@angular/core';
import {Listing} from "../../models/listing";
import {DataStorageService} from "../../services/data-storage.service";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  estateList: Listing[] = [];

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.dataStorageService.getListings().subscribe(listings=>{
      this.estateList=listings.reverse();
    })


  }
}
