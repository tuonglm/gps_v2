import { Component } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	abc: any;

  constructor(public uniqueDeviceID: UniqueDeviceID) {
  	//this.abc = '1233';
  	this.uniqueDeviceID.get().then(
  		(uuid: any) => (this.abc = uuid)
  	).catch(
  		(error: any) => console.log(error)
  	);
  }

}
