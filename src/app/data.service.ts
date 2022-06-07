import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employees:object [] = [
    {fname:'seif', lname:'tarek', age : 24},
    {fname:'hussein', lname:'saad', age : 28},
    {fname:'ziad', lname:'hassan', age : 25},
    {fname:'hossam', lname:'tharwat', age : 21},
    {fname:'gaber', lname:'gamal', age : 32}
  ]
  constructor() { }
}
