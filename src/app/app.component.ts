import { Component } from '@angular/core';
import { SidenavService } from './sidebar/sidenav.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Blog';

  constructor(
    public sideNavService: SidenavService,
    public themeService: ThemeService
  ) {}
}
