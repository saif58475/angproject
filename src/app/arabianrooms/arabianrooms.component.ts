import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-arabianrooms',
  templateUrl: './arabianrooms.component.html',
  styleUrls: ['./arabianrooms.component.css']
})
export class ArabianroomsComponent implements OnInit {
data:Products [] = [
  {name:'Living One' ,image:'assets/img/arabian1.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living One' ,image:'assets/img/arabian2.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living One' ,image:'assets/img/arabian3.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living One' ,image:'assets/img/arabian4.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living One' ,image:'assets/img/arabian5.jpg' ,quantity:30 ,price:15600 ,warranty:true},
]
  constructor() { }

  ngOnInit(): void {
  }

}
