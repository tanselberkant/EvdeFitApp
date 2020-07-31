import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoulderDetailPageRoutingModule } from './shoulder-detail-routing.module';

import { ShoulderDetailPage } from './shoulder-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoulderDetailPageRoutingModule
  ],
  declarations: [ShoulderDetailPage]
})
export class ShoulderDetailPageModule {}
