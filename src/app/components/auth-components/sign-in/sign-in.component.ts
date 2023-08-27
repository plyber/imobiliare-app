import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email: string;
  password: string;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  signIn() {
    this.authService.signIn(this.email, this.password)
      .then(() => {
        this.router.navigate(['listings'])
      })
      .catch(error => {
        this.errorMessage = this.authService.handleAuthError(error);
      });
  }
  signUp() {
    this.authService.signUp(this.email, this.password)
        .then(() => {
          this.router.navigate(['listings'])
        })
        .catch(error => {
          this.errorMessage = this.authService.handleAuthError(error);
        });
  }
}
