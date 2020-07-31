import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackDetailPageRoutingModule } from './back-detail-routing.module';

import { BackDetailPage } from './back-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackDetailPageRoutingModule
  ],
  declarations: [BackDetailPage]
})
export class BackDetailPageModule {}
