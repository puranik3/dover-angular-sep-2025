import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {
  AuthenticationService,
  ICredentials,
} from '../../app/common/auth/auth';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  credentials: ICredentials = {
    email: 'john.doe@example.com',
    password: 'Password123#',
  };

  loading = false;
  returnUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.credentials).subscribe({
      next: (data) => {
        this.router.navigate([this.returnUrl]);
      },
      error: (error) => {
        alert( error.message );

        this.loading = false;
      },
    });
  }
}