import {
  cfaSignIn,
  mapUserCredentialToUserInfo,
  mapUserToUserInfo,
} from 'capacitor-firebase-auth';
import { UserInfo } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './firestore.service';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public ngFireAuth: AngularFireAuth,
    private firestore: FirestoreService,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        const user = mapUserCredentialToUserInfo().apply(value);
        console.log(user);
      });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  async isEmailVerified(): Promise<boolean> {
    let emailVerified: boolean;
    const user: UserInfo = JSON.parse(localStorage.getItem('user'));
    const firestoreUser = await (
      await this.firestore.consultar('users', user.uid)
    ).subscribe((resultado) => {
      // Preguntar si se hay encontrado un document con ese ID
      if (resultado.payload.data()['verified']) {
        console.log(resultado.payload.data()['verified']);
        emailVerified = true;
      } else {
        console.log("Nada encontrado");
        emailVerified = false;
      }
    });

    return emailVerified !== false ? true : false;
  }

  async GoogleSignIn() {
    cfaSignIn('google.com')
      .pipe(mapUserToUserInfo())
      .subscribe((user: UserInfo) => this.SetUserData(user));
  }

  // Store user in localStorage
  async SetUserData(user: UserInfo) {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    await this.firestore.actualizar('users', user.uid, userData, true);
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
