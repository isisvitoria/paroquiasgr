import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Padroeiro } from './padroeiro';

@NgModule({
  declarations: [
    Padroeiro,
  ],
  imports: [
    IonicPageModule.forChild(Padroeiro),
  ],
})
export class PadroeiroModule {}
