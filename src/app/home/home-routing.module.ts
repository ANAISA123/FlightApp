import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPilotsComponent } from './info-pilots/info-pilots.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPilotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
