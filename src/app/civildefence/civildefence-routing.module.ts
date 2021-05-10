import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CivildefencePage } from './civildefence.page';

const routes: Routes = [
  {
    path: '',
    component: CivildefencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivildefencePageRoutingModule {}
