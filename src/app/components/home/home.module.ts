import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './content/content.component';
import { InfoPilotsComponent } from './info-pilots/info-pilots.component';
import { FlightHoursComponent } from './flight-hours/flight-hours.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


@NgModule({
  declarations: [
    ContentComponent,
    InfoPilotsComponent,
    FlightHoursComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
