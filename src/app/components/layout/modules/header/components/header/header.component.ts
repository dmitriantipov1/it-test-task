import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpenMenu: Boolean = false;

  toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }

}
