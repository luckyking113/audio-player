import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CloudProvider } from '../../providers/cloud/cloud';

/**
 * Generated class for the MusicListpopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'music-listpopover',
  templateUrl: 'music-listpopover.html'
})
export class MusicListpopoverComponent {

  items:any;
  text: string;

  constructor( public viewCtrl: ViewController, public cloudProvider: CloudProvider) {    
    this.items = this.cloudProvider.files;        
    console.log(this.items);
    // this.items=[
    //   {item:'test1'},
    //   {item:'test2'},
    //   {item:'test3'},
    //   {item:'test'},
    // ]
  }

  itemClick(item, index){      
    this.viewCtrl.dismiss(item, index);
  }
}
