import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    posts: []
  }
  password: string;
  confirmPassword: string;
  errorMessage: string;
  logging: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  signIn() {
    this.authService.signIn(this.user.email, this.password)
      .then(() => {
        this.router.navigate(['listings'])
      })
      .catch(error => {
        this.errorMessage = this.authService.handleAuthError(error);
      });
  }

  signUp() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords don't match."
      return;
    }
    this.authService.signUp(this.user.email, this.password)
      .then(() => {
        this.router.navigate(['listings'])
      })
      .catch(error => {
        this.errorMessage = this.authService.handleAuthError(error);
      });
  }
}
