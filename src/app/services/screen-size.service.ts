import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  isMobile = false;
  constructor() {
    this.checkScreenSize();
  }
  private checkScreenSize(){
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth < 768;
  }
}
