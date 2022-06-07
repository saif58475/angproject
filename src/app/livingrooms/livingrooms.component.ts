import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-livingrooms',
  templateUrl: './livingrooms.component.html',
  styleUrls: ['./livingrooms.component.css']
})
export class LivingroomsComponent implements OnInit {
data:Products [] = [
  {name:'Living One' ,image:'assets/img/livingroom/living1.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living Two' ,image:'assets/img/livingroom/living2.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living Thre' ,image:'assets/img/livingroom/living3.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living Four' ,image:'assets/img/livingroom/living4.jpg' ,quantity:30 ,price:15600 ,warranty:true},
  {name:'Living Five' ,image:'assets/img/livingroom/living1.jpg' ,quantity:30 ,price:15600 ,warranty:true},
]
  constructor() { }

  ngOnInit(): void {
  }

}
