import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
sub:any;
    jewelery:any[] = [];
  constructor(private _ApidataService:ApidataService) {
 this.sub = _ApidataService.getjewelery().subscribe( (data)=> {
  this.jewelery = data ;
  console.log(this.jewelery);
 })
   }


  ngOnInit(): void {
  }

  ngOndestroy(): void {
 this.sub.unsubscribe();
  }

}
