import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { SidenavService } from 'src/app/sidebar/sidenav.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  public questions: any;
  constructor(
    public questionService: QuestionService,
    public sideNavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestionCategories().subscribe((res) => {
      this.questions = res.map((e) => {
        return {
          questionId: e.payload.doc.id,
          questionDesc: e.payload.doc.data()['QuestionDesc'],
          questionText: e.payload.doc.data()['QuestionText'],
          questionCategoryId: e.payload.doc.data()['QuestionCategoryId'],
          questionNo: e.payload.doc.data()['QuestionNo'],
        };
      });

      this.questions = this.questions
        .filter((item) => item.questionCategoryId === 'Dh12FZmsQtghhLPqZFjs')
        .sort((item1, item2) => (item1.questionNo > item2.questionNo ? 1 : -1));
    });
  }
}
