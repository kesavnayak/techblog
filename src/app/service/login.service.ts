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
  loading: boolean = false;

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
    this.loading = true;
    var result = await this.afAuth.signInWithEmailAndPassword(
      model.email,
      model.password
    );
    if (result != null) {
      this.authStore();
      this.loading = false;
      this.router.navigate(['']);
    }
  }

  async register(model: any) {
    this.loading = true;
    var result = await this.afAuth.createUserWithEmailAndPassword(
      model.email,
      model.password
    );
    if (result != null) {
      this.loading = false;
      this.router.navigate(['login']);
    }
  }

  async logout() {
    await this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    });
  }

  loginViaGoogle(): void {
    this.loading = true;
    var provider = new auth.default.auth.GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);

    this.afAuth
      .getRedirectResult()
      .then((gsignres) => {
        if (gsignres.user != null) {
          this.authStore();
          this.loading = false;
          this.router.navigate(['']);
        } else {
          this.loading = false;
        }
      })
      .catch((err) => {
        this.loading = false;
      });
  }

  loginViaFacebook(): void {
    this.loading = true;
    var provider = new auth.default.auth.FacebookAuthProvider();
    this.afAuth.signInWithRedirect(provider);
    this.afAuth
      .getRedirectResult()
      .then((gsignres) => {
        if (gsignres.user != null) {
          this.authStore();
          this.loading = false;
          this.router.navigate(['']);
        } else {
          this.loading = false;
        }
      })
      .catch((err) => {
        this.loading = false;
      });
  }
}
