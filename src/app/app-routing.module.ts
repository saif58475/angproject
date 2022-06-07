import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabianroomsComponent } from './arabianrooms/arabianrooms.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';
import { CarpetModelFiveComponent } from './carpet-model-five/carpet-model-five.component';
import { CarpetModelFourComponent } from './carpet-model-four/carpet-model-four.component';
import { CarpetModelOneComponent } from './carpet-model-one/carpet-model-one.component';
import { CarpetModelThreeComponent } from './carpet-model-three/carpet-model-three.component';
import { CarpetModelTwoComponent } from './carpet-model-two/carpet-model-two.component';
import { CarpetsComponent } from './carpets/carpets.component';
import { DinningroomsComponent } from './dinningrooms/dinningrooms.component';
import { ElectricComponent } from './electric/electric.component';
import { EmployeesComponent } from './employees/employees.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HomeComponent } from './home/home.component';
import { LivingroomsComponent } from './livingrooms/livingrooms.component';
import { MicrowavesComponent } from './microwaves/microwaves.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ToasterComponent } from './toaster/toaster.component';
import { WashersComponent } from './washers/washers.component';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'electric', component:ElectricComponent},
  {path:'microwaves', component:MicrowavesComponent},
  {path:'washers' , component:WashersComponent},
  {path:'employees' , component:EmployeesComponent},
  {path:'toaster' , component:ToasterComponent},
  {path:'furniture' , component:FurnitureComponent},
  {path:'carpet' , component:CarpetsComponent},
  {path:'carpet-model-one' , component:CarpetModelOneComponent},
  {path:'carpet-model-two' , component:CarpetModelTwoComponent},
  {path:'carpet-model-three' , component:CarpetModelThreeComponent},
  {path:'carpet-model-four' , component:CarpetModelFourComponent},
  {path:'carpet-model-five' , component:CarpetModelFiveComponent},
  {path:'bedrooms', component:BedroomsComponent},
  {path:'dinningrooms', component:DinningroomsComponent},
  {path:'livingrooms', component:LivingroomsComponent},
  {path:'arabianrooms', component:ArabianroomsComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
