import { Component, OnInit } from '@angular/core';
import { QuestioncategoryService } from 'src/app/service/questioncategory.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-interviewquestions',
  templateUrl: './interviewquestions.component.html',
  styleUrls: ['./interviewquestions.component.scss'],
})
export class InterviewquestionsComponent implements OnInit {
  public questionCategories: any;
  constructor(
    public questioncategoryService: QuestioncategoryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getQuestionCategories();
  }

  getQuestionCategories() {
    this.questioncategoryService.getQuestionCategories().subscribe((res) => {
      this.questionCategories = res.map((e) => {
        return {
          questionCategoryId: e.payload.doc.id,
          questionCategoryName: e.payload.doc.data()['QuestionCategoryName'],
          questionCategoryIcon: e.payload.doc.data()['QuestionCategoryIcon'],
          questionCategoryLogo: e.payload.doc.data()['QuestionCategoryLogo'],
          questionCategoryDesc: e.payload.doc.data()['QuestionCategoryDesc'],
          questionCategoryColor: e.payload.doc.data()['QuestionCategoryColor'],
          questionCategoryLink: e.payload.doc.data()['QuestionCategoryLink'],
          categoryId: e.payload.doc.data()['CategoryId'],
        };
      });

      this.questionCategories = this.questionCategories
        .filter((item) => item.categoryId === 'pLDuKxw3JFx1Oify3Db3')
        .sort((item1, item2) => (item1.questionNo > item2.questionNo ? 1 : -1));
    });
  }

  goBack() {
    this.location.back();
    console.log('goBack()...');
  }
}
