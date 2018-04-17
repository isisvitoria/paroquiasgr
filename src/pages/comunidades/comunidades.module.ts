import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Comunidades } from './comunidades';

@NgModule({
  declarations: [
    Comunidades,
  ],
  imports: [
    IonicPageModule.forChild(Comunidades),
  ],
})
export class ComunidadesModule {}
