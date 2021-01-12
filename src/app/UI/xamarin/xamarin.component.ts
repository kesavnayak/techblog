import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { SidenavService } from 'src/app/sidebar/sidenav.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-xamarin',
  templateUrl: './xamarin.component.html',
  styleUrls: ['./xamarin.component.scss'],
})
export class XamarinComponent implements OnInit {
  constructor(
    public questionService: QuestionService,
    public sideNavService: SidenavService,
    private location: Location
  ) {}

  public cards: any;

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.questionService.getCards().subscribe((res) => {
      this.cards = res.map((e) => {
        return {
          cardId: e.payload.doc.id,
          content: e.payload.doc.data()['content'],
          imageUrl: e.payload.doc.data()['imageUrl'],
          subtitle: e.payload.doc.data()['subtitle'],
          title: e.payload.doc.data()['title'],
          questionCategoryId: e.payload.doc.data()['QuestionCategoryId'],
          cardno: e.payload.doc.data()['cardno'],
          more: e.payload.doc.data()['more'],
        };
      });

      this.cards = this.cards
        .filter((item) => item.questionCategoryId === 'QvJaJF3YH54YJp6vWLov')
        .sort((item1, item2) => (item1.cardno > item2.cardno ? 1 : -1));
    });
  }

  goBack() {
    this.location.back();
    console.log('goBack()...');
  }
  saveit(url) {
    window.open(url, '_self');
  }
}
