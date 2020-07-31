import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoulderPage } from './shoulder.page';

const routes: Routes = [
  {
    path: '',
    component: ShoulderPage
  },
  {
    path: 'shoulder-detail',
    loadChildren: () => import('./shoulder-detail/shoulder-detail.module').then( m => m.ShoulderDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoulderPageRoutingModule {}
