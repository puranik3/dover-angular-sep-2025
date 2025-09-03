import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IWorkshop, { Category } from './models/IWorkshop';

import { environment } from '../../environments/environment';

type ParamsGetWorkshop = { _page: number; category?: string };

@Injectable({
    providedIn: 'root',
})
export class Workshops {
    apiUrl = environment.apiUrl;

    // http : HttpClient;
    constructor(private http: HttpClient) {
        // this.http = http;
    }

    getWorkshops(page: number, category: Category | '' = '') {
        const params: ParamsGetWorkshop = {
            _page: page,
        };

        if (category !== '') {
            params.category = category;
        }

        // Observable object is returned
        return this.http.get<IWorkshop[]>(`${this.apiUrl}/workshops/`, {
            // params: params
            params,
        });
    }

    getWorkshopById(workshopId: number) {
        return this.http.get<IWorkshop>(
            `${this.apiUrl}/workshops/${workshopId}`
        );
    }
}
