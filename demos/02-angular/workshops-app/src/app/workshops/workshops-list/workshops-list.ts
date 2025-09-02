import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Workshops } from '../workshops';

import IWorkshop from '../models/IWorkshop';

@Component({
  selector: 'app-workshops-list',
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './workshops-list.html',
  styleUrl: './workshops-list.scss'
})
export class WorkshopsList implements OnInit {
  workshops : IWorkshop[] = [];
  error: Error | null = null;
  loading: boolean = true;

  constructor( private w : Workshops ) {
  }

  ngOnInit() {
    this.loading = true;

    this.w.getWorkshops().subscribe({ // pass an Observer
      next: ( workshops ) => {
        this.workshops = workshops;
        this.loading = false;
        console.log( this.workshops );
      },
      error: ( err ) => {
        this.error = err;
        this.loading = false;
      }
    });
  }
}
