import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NikePage } from './nike';

@NgModule({
  declarations: [
    NikePage,
  ],
  imports: [
    IonicPageModule.forChild(NikePage),
  ],
})
export class NikePageModule {}
