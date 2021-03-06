import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  hideSideNav: boolean = false;
  hideAlert: boolean = false;
  hideMessage: boolean = false;
  hideProfile: boolean = false;
  hidePage: boolean = false;
  hideQuestion: boolean = false;

  constructor(private firestore: AngularFirestore) {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }

  hideShowSideNav(): void {
    //this.hideSideNav = true;
  }

  toggleAlert(): void {
    this.hideAlert = !this.hideAlert;
  }

  toggleHideAlert(): void {
    this.hideAlert = false;
  }

  toggleMessage(): void {
    this.hideMessage = !this.hideMessage;
  }

  toggleHideMessage() {
    this.hideMessage = false;
  }

  toggleProfile(): void {
    this.hideProfile = !this.hideProfile;
  }

  toggleHideProfile(): void {
    this.hideProfile = false;
  }

  togglePage(): void {
    this.hidePage = !this.hidePage;
  }

  toggleHidePage(): void {
    this.hidePage = false;
  }

  toggleQuestion(): void {
    this.hideQuestion = !this.hideQuestion;
  }

  toggleHideQuestion(): void {
    this.hideQuestion = false;
  }

  generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  getRecent() {
    return this.firestore.collection('Recent').snapshotChanges();
  }
}
