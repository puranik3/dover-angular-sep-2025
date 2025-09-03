import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IWorkshop, { Category } from './models/IWorkshop';

type ParamsGetWorkshop = { _page: number; category?: string };

@Injectable({
  providedIn: 'root'
})
export class Workshops {
  // http : HttpClient;
  constructor( private http : HttpClient )  {
    // this.http = http;
  }

  getWorkshops( page : number, category: Category | '' = '' ) {
    const params: ParamsGetWorkshop = {
        _page: page,
    };

    if ( category !== '' ) {
      params.category = category;
    }

    // Observable object is returned
    return this.http.get<IWorkshop[]>(
      `https://workshops-server.onrender.com/workshops/`,
      {
        // params: params
        params
      }
    )
  }
}