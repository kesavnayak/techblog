import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentService } from './../../service/comment.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss'],
})
export class CommentboxComponent implements OnInit {
  commentForm: FormGroup;
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  @Output() usercomment = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getComments();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      this.commentInfo.push({
        currentDate: Date.now(),
        commentTxt: this.commentForm.controls['comment'].value,
        approval: false,
        replyComment: [],
      });

      this.commentInfo.forEach((element) => {
        debugger;
        if (element['commentId'] == null) {
          this.commentService
            .createComments(element)
            .then((res) => {})
            .catch((e) => {
              console.log(e);
            });
        }
      });
      this.usercomment.emit(this.commentInfo);
    }
  }

  getComments() {
    this.commentService.getComments().subscribe((res) => {
      this.commentInfo = res.map((e) => {
        return {
          commentId: e.payload.doc.id,
          commentTxt: e.payload.doc.data()['commentTxt'],
          currentDate: e.payload.doc.data()['currentDate'],
          replyComment: e.payload.doc.data()['replyComment'],
          approval: e.payload.doc.data()['approval'],
        };
      });
      this.usercomment.emit(this.commentInfo);
    });
  }
}
