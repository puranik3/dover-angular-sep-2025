import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { Workshops } from '../workshops';
import { Item } from './item/item';

import IWorkshop from '../models/IWorkshop';

@Component({
  selector: 'app-workshops-list',
  imports: [
    CommonModule,
    NgbModule,
    LoadingSpinner,
    ErrorAlert,
    Item
  ],
  templateUrl: './workshops-list.html',
  styleUrl: './workshops-list.scss'
})
export class WorkshopsList implements OnInit {
  workshops : IWorkshop[] = [];
  error: Error | null = null;
  loading: boolean = true;
  page = 2;

  fetchWorkshops() {
    this.loading = true;

    this.w.getWorkshops( this.page ).subscribe({ // pass an Observer
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

  constructor( private w : Workshops ) {
  }

  ngOnInit() {
    this.fetchWorkshops();
  }

  changePage( by : number ) {
    // alert( 'You would like to change the page?' );
    this.page += by;

    this.fetchWorkshops();
  }
}
