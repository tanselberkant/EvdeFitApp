import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoulderDetailPage } from './shoulder-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoulderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoulderDetailPageRoutingModule {}
