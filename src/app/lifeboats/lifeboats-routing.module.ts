import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeboatsPage } from './lifeboats.page';

const routes: Routes = [
  {
    path: '',
    component: LifeboatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifeboatsPageRoutingModule {}
