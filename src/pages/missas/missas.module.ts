import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Missas } from './missas';

@NgModule({
  declarations: [
    Missas,
  ],
  imports: [
    IonicPageModule.forChild(Missas),
  ],
})
export class MissasModule {}
