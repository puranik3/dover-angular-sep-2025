import { Component, OnInit } from '@angular/core';
import { Workshops } from '../workshops';
import IWorkshop from '../models/IWorkshop';

@Component({
  selector: 'app-workshops-list',
  imports: [],
  templateUrl: './workshops-list.html',
  styleUrl: './workshops-list.scss'
})
export class WorkshopsList implements OnInit {
  workshops : IWorkshop[] = [];

  constructor( private w : Workshops ) {
  }

  ngOnInit() {
    this.w.getWorkshops().subscribe({ // pass an Observer
      next: ( workshops ) => {
        this.workshops = workshops;
        console.log( this.workshops );
      }
    });
  }
}
