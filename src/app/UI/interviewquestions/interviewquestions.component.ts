import { Component, OnInit } from '@angular/core';
import { QuestioncategoryService } from 'src/app/service/questioncategory.service';

@Component({
  selector: 'app-interviewquestions',
  templateUrl: './interviewquestions.component.html',
  styleUrls: ['./interviewquestions.component.scss'],
})
export class InterviewquestionsComponent implements OnInit {
  public questionCategories: any;
  constructor(public questioncategoryService: QuestioncategoryService) {}

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
          questionCategoryLogoText: e.payload.doc.data()[
            'QuestionCategoryLogoText'
          ],
          questionCategoryLogo: e.payload.doc.data()['QuestionCategoryLogo'],
          questionCategoryDesc: e.payload.doc.data()['QuestionCategoryDesc'],
          questionCategoryColor: e.payload.doc.data()['QuestionCategoryColor'],
          questionCategoryLink: e.payload.doc.data()['QuestionCategoryLink'],
        };
      });
      console.log(this.questionCategories);
    });
  }
}
