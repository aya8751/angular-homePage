import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  headerChange = false; //controll adding class or not
  toggleMenu = false; //active or hide menu

  // handle scrolling of document
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e : any) {
    // check about scroll
    const number = e.target['scrollingElement'].scrollTop;
      if (number > 150) {
          this.headerChange = true;
      } else if (this.headerChange && number < 10) {
          this.headerChange = false;
      }
  }
  // to toggle menu depended on event
  viewMenu(){
    this.toggleMenu = true;
  }
  hideMenu(){
    this.toggleMenu = false;
  }
}
