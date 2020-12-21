import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/sidebar/sidenav.service';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss'],
})
export class OopsComponent implements OnInit {
  constructor(public sideNavService: SidenavService) {}

  ngOnInit(): void {}
}
