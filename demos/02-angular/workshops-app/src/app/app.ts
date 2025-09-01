// From workshops-app folder in the terminal run "ng add @ng-bootstrap/ng-bootstrap"

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgbAlertModule,
    Menu
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('workshops-app');
}
