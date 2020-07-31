import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmDetailPage } from './arm-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ArmDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmDetailPageRoutingModule {}
