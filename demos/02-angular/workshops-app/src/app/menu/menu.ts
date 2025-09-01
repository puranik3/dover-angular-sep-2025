import { Component } from '@angular/core';
import { NgbDropdown, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  imports: [
    NgbDropdown,
    NgbCollapse
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  isNavbarCollapsed = true;
}
