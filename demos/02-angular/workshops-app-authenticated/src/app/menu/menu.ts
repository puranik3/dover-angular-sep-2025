import { Component, inject, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../app/common/auth/auth';

@Component({
  selector: 'app-menu',
  imports: [
    NgbModule,
    RouterModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  isNavbarCollapsed = true;

  // Add this - this will change whenever user logs in / logs out - this is done by subscribing to the observable in ngOnInit()
  isLoggedIn = false;

  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  ngOnInit(): void {
    // Add this - subscribe to the observable to be notified when user logs in / logs out
    // we subscribe to be notified of changes in login status
    this.authenticationService.loggedInStatus$.subscribe(
      (isLoggedIn) => (this.isLoggedIn = isLoggedIn)
    );
  }

  logout(event: Event) {
    event.preventDefault();

    this.authenticationService.logout();

    this.router.navigateByUrl('/');
  }
}
