import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushNotificationsService } from './services/push-notifications.service';
import { AuthService } from './services/auth.service';
import { Plugins } from '@capacitor/core';
import { UserGoogle } from './models/user.model';
const { Storage } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcmService: PushNotificationsService,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  user: UserGoogle;

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.fcmService.initPush();
      console.log("APPCOMPONENET");
      
      await this.authService.isLoggedIn().then(async value => this.user = this.platform.is("capacitor") ? await Storage.get({ key: 'user' }): JSON.parse(localStorage.getItem('user')));      
    });
  }
}
