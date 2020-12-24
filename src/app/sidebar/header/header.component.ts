import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { SidenavService } from '../sidenav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public sideNavService: SidenavService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.logout();
  }
}
