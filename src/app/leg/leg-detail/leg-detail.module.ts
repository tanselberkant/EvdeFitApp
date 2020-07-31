import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegDetailPageRoutingModule } from './leg-detail-routing.module';

import { LegDetailPage } from './leg-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegDetailPageRoutingModule
  ],
  declarations: [LegDetailPage]
})
export class LegDetailPageModule {}
