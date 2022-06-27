import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEventPage } from './home-event.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEventPageRoutingModule {}
