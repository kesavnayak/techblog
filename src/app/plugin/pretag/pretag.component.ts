import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pretag',
  templateUrl: './pretag.component.html',
  styleUrls: ['./pretag.component.scss'],
})
export class PretagComponent implements OnInit {
  @Input() Text: string;

  constructor() {}

  ngOnInit(): void {}
}
