import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/plugin/card.blueprint';

@Component({
  selector: 'app-xamarin',
  templateUrl: './xamarin.component.html',
  styleUrls: ['./xamarin.component.scss'],
})
export class XamarinComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public card = new Card({
    buttons: ['read more'],
    content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.
                  New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.
                  New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.`,
    icons: ['favorite', 'share'],
    imageUrl:
      'https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg',
    subtitle: 'City in New York',
    title: 'New York City',
  });
}
