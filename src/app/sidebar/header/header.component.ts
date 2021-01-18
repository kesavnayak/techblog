import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { SidenavService } from '../sidenav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public recents: any = [];

  constructor(
    public sideNavService: SidenavService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getRecents();
  }

  logout() {
    this.loginService.logout();
  }

  getRecents() {
    this.sideNavService.getRecent().subscribe((res) => {
      this.recents = res.map((e) => {
        return {
          recentId: e.payload.doc.id,
          recentsDate: e.payload.doc.data()['TimeStamp'],
          recentsText: e.payload.doc.data()['Text'],
          recentsImage: e.payload.doc.data()['Image'],
          recentsLink: e.payload.doc.data()['Link'],
        };
      });
    });
  }
}
