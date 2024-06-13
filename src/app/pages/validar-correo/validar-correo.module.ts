import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarCorreoPageRoutingModule } from './validar-correo-routing.module';

import { ValidarCorreoPage } from './validar-correo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarCorreoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ValidarCorreoPage]
})
export class ValidarCorreoPageModule {}
