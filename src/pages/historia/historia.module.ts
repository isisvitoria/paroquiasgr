import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Historia } from './historia';

@NgModule({
  declarations: [
    Historia,
  ],
  imports: [
    IonicPageModule.forChild(Historia),
  ],
})
export class HistoriaModule {}
