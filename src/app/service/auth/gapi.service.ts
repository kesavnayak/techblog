import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GapiService {
  private readonly url: string = 'https://apis.google.com/js/api.js';
  private loaded = false;

  private loadGapi(): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      if (this.loaded) {
        observer.next();
        observer.complete();
        return;
      }

      const node = document.createElement('script');
      node.src = this.url;
      node.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(node);
      node.onload = () => {
        this.loaded = true;
        observer.next();
        observer.complete();
      };
      node.onerror = (error) => {
        observer.error(error);
      };
    });
  }

  public async initClient(baseScopes: string[] = ['email']) {
    await this.loadGapi().toPromise();
    return new Promise<void>(async (resolve, reject) => {
      try {
        const initClient = async (error) => {
          if (error) {
            return reject(error);
          }
          try {
            await gapi.client.init({
              apiKey: environment.firebaseConfig.apiKey,
              clientId: environment.clientId,
              scope: baseScopes.join(' '),
            });
            return resolve();
          } catch (error) {
            return reject(error);
          }
        };
        gapi.load('client:auth2', initClient);
      } catch (error) {
        return reject(error);
      }
    });
  }
  constructor() {}
}
