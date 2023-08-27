import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navLinks = [
    {label: 'Home', path: '/'},
    {label: 'Listings', path: '/listings'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'},
  ];
  isMenuOpen = false;

  constructor() {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
