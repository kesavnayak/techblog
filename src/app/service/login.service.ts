import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as auth from 'firebase/app';
import { User } from '../model/user';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  get username(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? user.email : '';
  }

  authStore() {
    this.afAuth.authState.subscribe((user) => {
      debugger;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async login(model: any) {
    var result = await this.afAuth.signInWithEmailAndPassword(
      model.email,
      model.password
    );
    //localStorage.setItem('user', JSON.stringify(model.));
    this.authStore();
    this.router.navigate(['']);
  }

  async register(model: any) {
    var result = await this.afAuth.createUserWithEmailAndPassword(
      model.email,
      model.password
    );
    this.router.navigate(['login']);
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  loginViaGoogle(): Observable<auth.default.auth.UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new auth.default.auth.GoogleAuthProvider())
    );
  }
}
