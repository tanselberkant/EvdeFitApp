import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmPageRoutingModule } from './arm-routing.module';

import { ArmPage } from './arm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmPageRoutingModule
  ],
  declarations: [ArmPage]
})
export class ArmPageModule {}
