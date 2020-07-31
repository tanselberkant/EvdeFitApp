import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmDetailPageRoutingModule } from './arm-detail-routing.module';

import { ArmDetailPage } from './arm-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmDetailPageRoutingModule
  ],
  declarations: [ArmDetailPage]
})
export class ArmDetailPageModule {}
