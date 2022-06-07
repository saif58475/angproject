import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';


@Component({
  selector: 'app-washers',
  templateUrl: './washers.component.html',
  styleUrls: ['./washers.component.css']
})
export class WashersComponent implements OnInit {
products:any[] = [];
  sub:any;
  constructor(private _ApidataService:ApidataService) {
    this.sub = _ApidataService.getProducts().subscribe( (data)=>{
      this.products = data ;
      console.log(this.products);
    } )
   }

  ngOnInit(): void {
  }
  ngOnDestroy():void{
  this.sub.unsubscribe();
  }

}
