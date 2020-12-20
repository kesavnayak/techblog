import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidenavService } from '../sidenav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public sideNavService: SidenavService) {}

  ngOnInit(): void {}
}
