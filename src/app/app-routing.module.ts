import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lifeboats',
    loadChildren: () => import('./lifeboats/lifeboats.module').then( m => m.LifeboatsPageModule)
  },
  {
    path: 'coastguard',
    loadChildren: () => import('./coastguard/coastguard.module').then( m => m.CoastguardPageModule)
  },
  {
    path: 'civildefence',
    loadChildren: () => import('./civildefence/civildefence.module').then( m => m.CivildefencePageModule)
  },
  {
    path: 'garda',
    loadChildren: () => import('./garda/garda.module').then( m => m.GardaPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
