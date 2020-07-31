import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackPage } from './back.page';

const routes: Routes = [
  {
    path: '',
    component: BackPage
  },
  {
    path: 'back-detail',
    loadChildren: () => import('./back-detail/back-detail.module').then( m => m.BackDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackPageRoutingModule {}
