import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbdominalPage } from './abdominal.page';

const routes: Routes = [
  {
    path: '',
    component: AbdominalPage
  },
  {
    path: 'abdominal-detail',
    loadChildren: () => import('./abdominal-detail/abdominal-detail.module').then( m => m.AbdominalDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbdominalPageRoutingModule {}
