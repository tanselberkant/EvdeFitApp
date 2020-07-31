import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChestDetailPageRoutingModule } from './chest-detail-routing.module';

import { ChestDetailPage } from './chest-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChestDetailPageRoutingModule
  ],
  declarations: [ChestDetailPage]
})
export class ChestDetailPageModule {}
