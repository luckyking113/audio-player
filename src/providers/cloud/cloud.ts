// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';

/*
  Generated class for the CloudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CloudProvider {

  files:any = [
    { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3', 
      name: 'Perfect by Ed Sheeran'
    },
    {
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan'
    },
    { url: 'https://parsefiles.back4app.com/oJ4s9Vsj9AvVKjddHwhyW4emPJ7ONrOn0cRXk3am/1eda3c4922d454f43dff7a7bb51c1460_2.mp3',
      name: 'Penny Lane by The Beatles'
    }
  ];

  constructor() {
    console.log('Hello CloudProvider Provider');
  }

  getFiles() {
    return of(this.files);
   }

  testCloudProvider(){
    console.log("Test cloud provider");
  }

}
