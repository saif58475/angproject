import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private _HttpClient:HttpClient) {

   }
   getProducts(): Observable<any>
  {
      return this._HttpClient.get<any>('https://fakestoreapi.com/products');
  }
  getjewelery(): Observable<any>
  {
      return this._HttpClient.get<any>('https://fakestoreapi.com/products/category/jewelery');
  }
}
