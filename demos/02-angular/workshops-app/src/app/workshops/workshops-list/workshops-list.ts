import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { Pagination } from '../../common/pagination/pagination';
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
        Item,
        Pagination,
        FormsModule
    ],
    templateUrl: './workshops-list.html',
    styleUrl: './workshops-list.scss',
})
export class WorkshopsList implements OnInit {
    workshops: IWorkshop[] = [];
    filteredWorkshops: IWorkshop[] = [];
    error: Error | null = null;
    loading: boolean = true;
    page = 1;
    filterKey = '';

    fetchWorkshops() {
        this.loading = true;

        this.w.getWorkshops(this.page).subscribe({
            // pass an Observer
            next: (workshops) => {
                this.workshops = workshops;
                this.filterWorkshops();
                this.loading = false;
                console.log(this.workshops);
            },
            error: (err) => {
                this.error = err;
                this.loading = false;
            },
        });
    }

    constructor(
      private w: Workshops,
      private ar: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit() {
        // Observable - emits many events over time
        this.ar.queryParamMap.subscribe({
            next: (queryParamMap) => {
                const page = queryParamMap.get('page');
                console.log(page);

                if (page) {
                    this.page = +page;
                } else {
                    this.page = 1;
                }

                this.fetchWorkshops();
            },
        });
    }

    changePage(by: number) {
        // alert( 'You would like to change the page?' );
        const page = this.page + by;

        this.router.navigate(['/workshops'], {
            queryParams: {
                page: page,
            },
        });

        // not needed anymore -> the queryParamMap subscription will take care of fecthing data when ?page changes
        // this.fetchWorkshops();
    }

    filterWorkshops() {
        this.filteredWorkshops = this.workshops.filter(
            w => w.name.toUpperCase().includes( this.filterKey.toUpperCase() )
        )
    }
}
