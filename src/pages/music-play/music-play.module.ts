import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPlayPage } from './music-play';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MusicPlayPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicPlayPage),
    HttpClientModule
  ],

  // exports: [
  //   MusicPlayPage
  // ]
})
export class MusicPlayPageModule {}
