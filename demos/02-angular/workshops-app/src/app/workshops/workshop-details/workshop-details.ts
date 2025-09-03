import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { LocationPipe } from '../../common/location-pipe';

import { Workshops } from '../workshops';
import IWorkshop from '../models/IWorkshop';

@Component({
    selector: 'app-workshop-details',
    imports: [
        LoadingSpinner,
        ErrorAlert,
        DatePipe,
        LocationPipe
    ],
    templateUrl: './workshop-details.html',
    styleUrl: './workshop-details.scss',
})
export class WorkshopDetails implements OnInit {
    private w = inject( Workshops );
    private ar = inject( ActivatedRoute );
    id!: number;

    workshop!: IWorkshop;
    error: Error | null = null;
    loading: boolean = true;

    // constructor(
    //   private w : Workshops,
    //   private ar : ActivatedRoute
    // ) {

    // }

    ngOnInit() {
      this.ar.paramMap.subscribe({
            next: ( paramMap ) => {
                this.id = +(paramMap.get( 'id' ) as string);
                // console.log( this.id );
                this.w.getWorkshopById( this.id ).subscribe({
                        next: ( workshop ) => {
                            this.workshop = workshop;
                            this.loading = false;
                        },
                        error: ( err ) => {
                            this.error = err;
                            this.loading = false;
                        }
                });
            }
        });
    }
}
