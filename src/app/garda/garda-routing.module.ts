import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GardaPage } from './garda.page';

const routes: Routes = [
  {
    path: '',
    component: GardaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardaPageRoutingModule {}
