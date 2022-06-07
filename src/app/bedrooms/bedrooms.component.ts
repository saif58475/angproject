import { Component, OnInit } from '@angular/core';

import { Products } from '../products';

@Component({
  selector: 'app-bedrooms',
  templateUrl: './bedrooms.component.html',
  styleUrls: ['./bedrooms.component.css']
})
export class BedroomsComponent implements OnInit {

  data:Products[]=[
    {name:'Malta' ,image:'assets/img/bedroom/bedroom1.jpg' ,quantity:30 ,price:15600 ,warranty:true},
    {name:'Sikl' ,image:'assets/img/bedroom/bedroom2.jpg' ,quantity:35 ,price:14000 ,warranty:true},
    {name:'Bopl' ,image:'assets/img/bedroom/bedroom3.jpg' ,quantity:15 ,price:63555 ,warranty:true},
    {name:'Nature' ,image:'assets/img/bedroom/bedroom4.jpg' ,quantity:58 ,price:10000 ,warranty:true},
    {name:'Modern' ,image:'assets/img/bedroom/bedroom5.jpg' ,quantity:10 ,price:15480 ,warranty:true},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
