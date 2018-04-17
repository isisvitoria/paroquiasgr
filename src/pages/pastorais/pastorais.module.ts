import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pastorais } from './pastorais';

@NgModule({
  declarations: [
    Pastorais,
  ],
  imports: [
    IonicPageModule.forChild(Pastorais),
  ],
})
export class PastoraisModule {}
