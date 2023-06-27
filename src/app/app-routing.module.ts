import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../app/shared/header/header.component';
const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./home/home.module').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
