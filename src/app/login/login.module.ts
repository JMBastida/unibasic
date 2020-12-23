import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AuthService } from '../services/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { VerifyComponent } from './verify/verify.component';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AngularFireStorageModule
  ],
  declarations: [LoginPage, WelcomeComponent, VerifyComponent],
  providers: [AuthService]
})
export class LoginPageModule {}
