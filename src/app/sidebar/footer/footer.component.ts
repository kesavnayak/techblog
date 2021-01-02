import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentYear: string = '';

  constructor() {
    this.currentYear = new Date().getFullYear().toString();
  }

  ngOnInit(): void {}
}
