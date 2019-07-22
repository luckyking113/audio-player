import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Slides} from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {    

  }

  ngAfterViewInit() {
    this.slides.autoplay = 2000;
    this.slides.autoplayDisableOnInteraction = false;
    this.slides.slidesPerView = 1.65;
}

  openPlayMusicPage(){  
    this.navCtrl.push("MusicPlayPage");      
  }
  

}
