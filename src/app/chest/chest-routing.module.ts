import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChestPage } from './chest.page';

const routes: Routes = [
  {
    path: '',
    component: ChestPage
  },
  {
    path: 'chest-detail',
    loadChildren: () => import('./chest-detail/chest-detail.module').then( m => m.ChestDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChestPageRoutingModule {}
