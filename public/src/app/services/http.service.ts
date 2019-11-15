import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getCakes() {
    return this._http.get('/api/cakes/retrieveall'); 
  }
  newCake(data: any) {
    return this._http.post('/api/cakes/newcake', data); 
  }
  cakeDelete(data: any) {
    return this._http.delete('/api/cakes/Delete/' + data['id']);
  }
  cakeEdit(id:any, data: any) {
    return this._http.post('/api/cakes/Update/'+ id, data);
  }
  rateCake(id:any, data: any) {
    return this._http.post('/api/cakes/addrating/'+ id, data);
  }
  getById(data: any) {
    return this._http.get('/api/cakes/retrieveId/' + data['id']); /* Same with this one */
  }
  e2endtest(num: any) {
    return this._http.post('/e2etest', num);
  }
}