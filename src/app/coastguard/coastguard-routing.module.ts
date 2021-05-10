import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoastguardPage } from './coastguard.page';

const routes: Routes = [
  {
    path: '',
    component: CoastguardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoastguardPageRoutingModule {}
