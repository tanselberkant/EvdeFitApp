import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegDetailPage } from './leg-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LegDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegDetailPageRoutingModule {}
