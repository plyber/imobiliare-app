import { Component } from '@angular/core';
import {ScreenSizeService} from "../../services/screen-size.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private screenSizeService: ScreenSizeService,
    //private router: Router
    )
  {
  // router.events.subscribe((event)=>{
  //   if(event instanceof NavigationEnd){
  //     this.isMenuOpen=false;
  //   }
  // })
  }

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Listings', path: '/listings' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get isMobile(){
    return this.screenSizeService.isMobile;
  }

}
