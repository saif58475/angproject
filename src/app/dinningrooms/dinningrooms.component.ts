import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-dinningrooms',
  templateUrl: './dinningrooms.component.html',
  styleUrls: ['./dinningrooms.component.css']
})
export class DinningroomsComponent implements OnInit {
data:Products [] = [
  {name:'Dinning Family' ,image:'assets/img/dinningroom/dinning1.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Dinning Modern' ,image:'assets/img/dinningroom/dinning2.jpg' ,quantity:30 ,price:60000 ,warranty:true},
  {name:'Dinning Classic' ,image:'assets/img/dinningroom/dinning3.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Dinning Relax' ,image:'assets/img/dinningroom/dinning4.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Dinning Workingspace' ,image:'assets/img/dinningroom/dinning5.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Dinning Double ' ,image:'assets/img/dinningroom/dinning6.jpg' ,quantity:30 ,price:15600 ,warranty:true},
]
  constructor() { }

  ngOnInit(): void {
  }

}
