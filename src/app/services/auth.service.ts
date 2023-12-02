import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Injectable, NgZone} from "@angular/core";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // userData:User;
  constructor(private afAuth: AngularFireAuth) {}

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.authState;
  }
  handleAuthError(error: any) {
    switch (error.code)
    {
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      default:
        return 'An error occurred.';
    }
  }
}
