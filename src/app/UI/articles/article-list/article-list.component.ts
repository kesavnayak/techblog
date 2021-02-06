import { Component, OnInit } from '@angular/core';
import { QuestioncategoryService } from 'src/app/service/questioncategory.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public ArticleList: any;
  constructor(
    public questioncategoryService: QuestioncategoryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList() {
    this.questioncategoryService.getArticleList().subscribe((res) => {
      this.ArticleList = res.map((e) => {
        return {
          Id:e.payload.doc.id,
          ArticleListName: e.payload.doc.data()['ArticleListName'],
          ArticleListDesc: e.payload.doc.data()['ArticleListDesc'],
          ArticleListLogo: e.payload.doc.data()['ArticleListLogo'],
          ArticleListColor: e.payload.doc.data()['ArticleListColor'],
        };
      });
    });
  }

  goBack() {
    this.location.back();
    console.log('goBack()...');
  }

}
