import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filtering = false;

  constructor() {}

  onInput(e: CustomEvent){
    if (e.type === "ionFocus") { // when seach-bar click
      console.log("ionFocus");
      this.filtering = true;
    } else {
      console.log("ionBlur");
      this.filtering = false;
    }
  }

}