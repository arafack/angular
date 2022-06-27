import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEventPageRoutingModule } from './home-event-routing.module';

import { HomeEventPage } from './home-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEventPageRoutingModule
  ],
  declarations: [HomeEventPage]
})
export class HomeEventPageModule {}
