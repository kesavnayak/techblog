import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { SidenavService } from 'src/app/sidebar/sidenav.service';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.scss'],
})
export class WebapiComponent implements OnInit {
  public questions: any;
  constructor(
    public questionService: QuestionService,
    public sideNavService: SidenavService,
    private location: Location
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
          iscollapse: e.payload.doc.data()['IsCollapse'],
        };
      });

      this.questions = this.questions
        .filter((item) => item.questionCategoryId === 'DtmRrWZ6lDEj3WM7RSOc')
        .sort((item1, item2) => (item1.questionNo > item2.questionNo ? 1 : -1));
    });
  }

  goBack() {
    this.location.back();
    console.log('goBack()...');
  }

  @ViewChild('content') content: ElementRef;
  makePdf(question) {
    let doc = new jsPDF();

    var data =
      '<strong>Q' +
      question.questionNo +
      '.' +
      question.questionText +
      '</strong><br/>' +
      question.questionDesc +
      '</div>';

    doc.fromHTML(data, function () {
      debugger;
      doc.save(
        'Q' + question.questionNo + '.' + question.questionText + '.pdf'
      );
    });

    //doc.html(question.questionDesc);
    doc.save('Q' + question.questionNo + '.' + question.questionText + '.pdf');
  }
}
