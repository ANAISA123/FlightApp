import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    loadChildren: () => import('./home/home.module').then((module) => module.HomeModule),
  },
=======
    loadChildren: () => import('./components/home/home.module').then((module) => module.HomeModule),
  }
>>>>>>> origin/develop
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
