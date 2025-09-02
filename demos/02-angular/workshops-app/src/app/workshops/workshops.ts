import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IWorkshop from './models/IWorkshop';

@Injectable({
  providedIn: 'root'
})
export class Workshops {
  // http : HttpClient;
  constructor( private http : HttpClient )  {
    // this.http = http;
  }

  getWorkshops() {
    // Observable object is returned
    return this.http.get<IWorkshop[]>(`https://workshops-server.onrender.com/workshops/`)
  }
}