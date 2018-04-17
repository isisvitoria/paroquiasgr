import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Clero } from './clero';

@NgModule({
  declarations: [
    Clero,
  ],
  imports: [
    IonicPageModule.forChild(Clero),
  ],
})
export class CleroModule {}
