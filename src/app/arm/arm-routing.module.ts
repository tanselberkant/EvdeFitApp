import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmPage } from './arm.page';

const routes: Routes = [
  {
    path: '',
    component: ArmPage
  },
  {
    path: 'arm-detail',
    loadChildren: () => import('./arm-detail/arm-detail.module').then( m => m.ArmDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmPageRoutingModule {}
