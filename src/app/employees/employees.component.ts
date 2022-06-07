import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  person:any[];
  constructor( _DataService:DataService ) { 
    //by declaring an object in the constructor we are going the best practice 
    // let x = new DataService();
     this.person = _DataService.employees ; 
  }

  ngOnInit(): void {
  }

}
