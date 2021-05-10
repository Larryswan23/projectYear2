import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GardaPageRoutingModule } from './garda-routing.module';

import { GardaPage } from './garda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GardaPageRoutingModule
  ],
  declarations: [GardaPage]
})
export class GardaPageModule {}
