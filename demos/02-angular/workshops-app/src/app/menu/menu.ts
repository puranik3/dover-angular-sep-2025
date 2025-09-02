import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    NgbModule,
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  isNavbarCollapsed = true;
}
