import {Listing} from "./listing";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  posts:Listing[];
}
