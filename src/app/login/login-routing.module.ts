import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifiedGuard } from '../guards/verified.guard';

import { LoginPage } from './login.page';
import { VerifyComponent } from './verify/verify.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
