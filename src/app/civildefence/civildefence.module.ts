import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CivildefencePageRoutingModule } from './civildefence-routing.module';

import { CivildefencePage } from './civildefence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CivildefencePageRoutingModule
  ],
  declarations: [CivildefencePage]
})
export class CivildefencePageModule {}
