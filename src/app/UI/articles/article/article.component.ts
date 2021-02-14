import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { SidenavService } from 'src/app/sidebar/sidenav.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  comments: string;
  count: number;
  constructor(
    public questionService: QuestionService,
    public sideNavService: SidenavService,
    private location: Location,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  public cards: any;
  public routeId: string;

  ngOnInit(): void {
    this.count = 0;
    this.route.params.subscribe((params) => {
      this.routeId = params['id']; //log the value of id
    });
    this.getCards();
  }

  getCards() {
    this.questionService.getArticle().subscribe((res) => {
      this.cards = res.map((e) => {
        return {
          id: e.payload.doc.id,
          Id: e.payload.doc.data()['Id'],
          Image: e.payload.doc.data()['Image'],
          Publish: e.payload.doc.data()['Publish'],
          Title: e.payload.doc.data()['Title'],
          Subtitle: e.payload.doc.data()['Subtitle'],
          Reference: e.payload.doc.data()['Reference'],
          Feature: e.payload.doc.data()['Feature'],
        };
      });

      this.cards = this.cards.filter((item) => item.Id === this.routeId);
    });
  }

  goBack() {
    this.location.back();
    console.log('goBack()...');
  }

  receiveComment($event) {
    this.comments = $event;
    this.count = 0;
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i]['approval']) this.count++;
    }
  }

  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }
}
