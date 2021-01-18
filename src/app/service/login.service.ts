import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as auth from 'firebase/app';
import { User } from '../model/user';
import { from, Observable } from 'rxjs';
import { SnackbarService } from '../plugin/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User;
  loading: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public snackbar: SnackbarService
  ) {}

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  get username(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? user.email : '';
  }

  get phoneNumber(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? user.phoneNumber : '';
  }

  get windowRef() {
    return window;
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
    // var result = await this.afAuth.signInWithEmailAndPassword(
    //   model.email,
    //   model.password
    // );
    // if (result != null) {
    //   debugger;
    //   this.authStore();
    //   this.loading = false;
    //   this.router.navigate(['']);
    // }

    await this.afAuth
      .signInWithEmailAndPassword(model.email, model.password)
      .then((response) => {
        this.authStore();
        this.loading = false;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.loading = false;
        this.snackbar.open(error.message);
      });
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

  loginViaGoogle(): Observable<auth.default.auth.UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new auth.default.auth.GoogleAuthProvider())
    );
  }

  loginViaFacebook(): Observable<auth.default.auth.UserCredential> {
    return from(
      this.afAuth.signInWithPopup(new auth.default.auth.FacebookAuthProvider())
    );
  }
}
