import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getCakes() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/api/cakes/retrieveall');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our cakes!", data));
  }
  getById(_id: string) {

    let tempobservable = this._http.get('/api/cakes/retrieveId/' + _id);
    tempobservable.subscribe(data => console.log("Got our cakes!", data));

  }
}