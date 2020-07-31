import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackDetailPage } from './back-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BackDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackDetailPageRoutingModule {}
