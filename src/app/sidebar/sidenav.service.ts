import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  hideSideNav: boolean = false;
  hideAlert: boolean = false;
  hideMessage: boolean = false;
  hideProfile: boolean = false;
  hidePage: boolean = false;

  constructor() {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }

  toggleAlert(): void {
    this.hideAlert = !this.hideAlert;
  }

  toggleMessage(): void {
    this.hideMessage = !this.hideMessage;
  }

  toggleProfile(): void {
    this.hideProfile = !this.hideProfile;
  }

  togglePage(): void {
    this.hidePage = !this.hidePage;
  }
}
