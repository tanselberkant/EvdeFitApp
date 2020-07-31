import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbdominalDetailPage } from './abdominal-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AbdominalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbdominalDetailPageRoutingModule {}
