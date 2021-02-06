import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { SidenavService } from 'src/app/sidebar/sidenav.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(
    public questionService: QuestionService,
    public sideNavService: SidenavService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  public cards: any;
  private routeId: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routeId=params['id'] //log the value of id
    });
    this.getCards();
  }

  getCards() {
    this.questionService.getArticles().subscribe((res) => {
      this.cards = res.map((e) => {
        return {
          id:e.payload.doc.id,
          Id: e.payload.doc.data()['Id'],
          Image: e.payload.doc.data()['Image'],
          More: e.payload.doc.data()['More'],
          Publish: e.payload.doc.data()['Publish'],
          Title: e.payload.doc.data()['Title'],
          Subtitle: e.payload.doc.data()['Subtitle'],
          Reference: e.payload.doc.data()['Reference'],
          Feature: e.payload.doc.data()['Feature'],
        };
      });

      this.cards = this.cards
        .filter((item) => item.Id === this.routeId);
        //.sort((item1, item2) => (item1.cardno > item2.cardno ? 1 : -1));
    });
  }

  goBack() {
    this.location.back();
    console.log('goBack()...');
  }

}
