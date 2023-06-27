import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './content/content.component';
import { InfoPilotsComponent } from './info-pilots/info-pilots.component';


@NgModule({
  declarations: [
    ContentComponent,
    InfoPilotsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
