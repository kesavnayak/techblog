import { Injectable, NgZone } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { GapiService } from './gapi.service';
import * as auth from 'firebase/app';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private isLoggedIn$ = new ReplaySubject<boolean>(1);
  private user$ = new ReplaySubject<firebase.default.User>(1);

  constructor(
    public afAuth: AngularFireAuth,
    public gapiService: GapiService,
    private ngZone: NgZone
  ) {
    this.isLoggedIn$.next(false);
    this.afAuth.onAuthStateChanged(async (user) => {
      this.ngZone.run(() => {
        this.isLoggedIn$.next(Boolean(user));
        this.user$.next(user);
      });
    });
  }

  get isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  get user(): Observable<firebase.default.User> {
    return this.user$.asObservable();
  }

  async signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  private async initAuth2(baseScopes: string[]): Promise<void> {
    await this.gapiService.initClient(baseScopes);
    if (!gapi.auth2.getAuthInstance()) {
      gapi.auth2.init({
        client_id: environment.clientId,
        scope: baseScopes.join(' '),
      });
    }
  }

  async signIn(baseScopes: string[] = ['email']): Promise<void> {
    await this.initAuth2(baseScopes);
    const googleUser = await gapi.auth2.getAuthInstance().signIn({
      prompt: 'select_account',
    });
    const token = googleUser.getAuthResponse().id_token;
    const credential = auth.default.auth.GoogleAuthProvider.credential(token);
    await this.afAuth.signInAndRetrieveDataWithCredential(credential);
  }
}
