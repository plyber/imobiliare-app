import {Injectable} from '@angular/core';
import {Listing} from "../models/listing";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    private listingsRef: AngularFireList<Listing>;

    constructor(
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {
        this.listingsRef = db.list<Listing>('/listings');

    }

    addListing(property: Listing) {
        console.log(property)
        return this.listingsRef.push(property);
    }

    getListings() {
        return this.listingsRef.snapshotChanges().pipe(
            map(actions =>
                actions.map(action => {
                    const data = action.payload.val();
                    const id = action.key;
                    return {id, ...data} as Listing;
                })
            )
        );
    }
    getListingByID(id: string): Observable<Listing> {
        console.log('test', 'listings/' + id);
        return this.db.object<Listing>('listings/' + id).valueChanges();
    }

}
