import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegPage } from './leg.page';

const routes: Routes = [
  {
    path: '',
    component: LegPage
  },
  {
    path: 'leg-detail',
    loadChildren: () => import('./leg-detail/leg-detail.module').then( m => m.LegDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegPageRoutingModule {}
