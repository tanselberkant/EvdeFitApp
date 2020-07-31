import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbdominalDetailPageRoutingModule } from './abdominal-detail-routing.module';

import { AbdominalDetailPage } from './abdominal-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbdominalDetailPageRoutingModule
  ],
  declarations: [AbdominalDetailPage]
})
export class AbdominalDetailPageModule {}
