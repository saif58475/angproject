import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricComponent } from './electric/electric.component';
import { MicrowavesComponent } from './microwaves/microwaves.component';
import { HomeComponent } from './home/home.component';
import { WashersComponent } from './washers/washers.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { ToasterComponent } from './toaster/toaster.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { CarpetsComponent } from './carpets/carpets.component';
import { CarpetModelOneComponent } from './carpet-model-one/carpet-model-one.component';
import { CarpetModelTwoComponent } from './carpet-model-two/carpet-model-two.component';
import { CarpetModelThreeComponent } from './carpet-model-three/carpet-model-three.component';
import { CarpetModelFourComponent } from './carpet-model-four/carpet-model-four.component';
import { CarpetModelFiveComponent } from './carpet-model-five/carpet-model-five.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';
import { DinningroomsComponent } from './dinningrooms/dinningrooms.component';
import { LivingroomsComponent } from './livingrooms/livingrooms.component';
import { ArabianroomsComponent } from './arabianrooms/arabianrooms.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    ElectricComponent,
    MicrowavesComponent,
    HomeComponent,
    WashersComponent,
    NotfoundComponent,
    EmployeesComponent,
    ToasterComponent,
    FurnitureComponent,
    CarpetsComponent,
    CarpetModelOneComponent,
    CarpetModelTwoComponent,
    CarpetModelThreeComponent,
    CarpetModelFourComponent,
    CarpetModelFiveComponent,
    BedroomsComponent,
    DinningroomsComponent,
    LivingroomsComponent,
    ArabianroomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
