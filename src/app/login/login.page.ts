import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then(async (res) => {
        if (await this.authService.isEmailVerified()) {
          this.router.navigate(['home']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  logInGoogle() {
    this.authService
      .GoogleSignIn()
      .then(async (res) => {
        if (await this.authService.isEmailVerified()) {
          this.router.navigate(['home']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
