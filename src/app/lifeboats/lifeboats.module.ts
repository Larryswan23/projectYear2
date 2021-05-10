import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifeboatsPageRoutingModule } from './lifeboats-routing.module';

import { LifeboatsPage } from './lifeboats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifeboatsPageRoutingModule
  ],
  declarations: [LifeboatsPage]
})
export class LifeboatsPageModule {}
