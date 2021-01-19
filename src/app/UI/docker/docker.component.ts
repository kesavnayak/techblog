import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
import { SidenavService } from 'src/app/sidebar/sidenav.service';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss'],
})
export class DockerComponent implements OnInit {
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
    this.questionService.getDocker().subscribe((res) => {
      this.questions = res.map((e) => {
        return {
          questionId: e.payload.doc.id,
          questionDesc: e.payload.doc.data()['QuestionDesc'],
          questionText: e.payload.doc.data()['QuestionText'],
          questionCategoryId: e.payload.doc.data()['QuestionCategoryId'],
          questionNo: e.payload.doc.data()['QuestionNo'],
          iscollapse: e.payload.doc.data()['IsCollapse'],
          questionRef: e.payload.doc.data()['QuestionRef'],
          questionshare:
            'Q' +
            e.payload.doc.data()['QuestionNo'] +
            ' ' +
            e.payload.doc.data()['QuestionText'] +
            '\n Answer : ' +
            this.htmlToText(e.payload.doc.data()['QuestionDesc']),
        };
      });

      this.questions = this.questions.sort((item1, item2) =>
        item1.questionNo > item2.questionNo ? 1 : -1
      );
    });
  }

  htmlToText(html: string) {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
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
