import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoastguardPageRoutingModule } from './coastguard-routing.module';

import { CoastguardPage } from './coastguard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoastguardPageRoutingModule
  ],
  declarations: [CoastguardPage]
})
export class CoastguardPageModule {}
