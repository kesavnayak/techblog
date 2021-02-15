import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  Directive,
  ViewContainerRef,
  ViewChildren,
  QueryList,
  ComponentFactoryResolver,
  AfterContentInit,
} from '@angular/core';
import { ConfirmDialogService } from 'src/app/confirm-dialog/confirm-dialog.service';
import { CommentService } from 'src/app/service/comment.service';
import { ChildboxComponent } from '../childbox/childbox.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[datacontainer]',
})
export class DatacontainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() postComment: Array<object> = [];
  @Output() countComments = new EventEmitter();
  public loadComponent = false;
  public commentIndex = 0;
  public reply: Array<object> = [];
  @Input() postId: any;

  @ViewChildren(DatacontainerDirective)
  entry: QueryList<DatacontainerDirective>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private commentService: CommentService,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit() {
    this.getComments();
  }

  ngOnChanges() {
    if (this.postComment !== undefined) {
      console.log('Main array====>', this.postComment);
    }
  }

  removeComment(no) {
    this.confirmDialogService.confirmThis(
      'Are you sure to delete ?',
      () => {
        this.commentService.delete(no);
        this.countComments.emit(this.postComment);
      },
      () => {
        console.log('No clicked');
      }
    );
  }

  replyComment(index, no) {
    this.loadComponent = true;
    const myFactory = this.resolver.resolveComponentFactory(ChildboxComponent);
    if (this.entry.toArray()[index].viewContainerRef.length <= 0) {
      const myRef = this.entry
        .toArray()
        [index].viewContainerRef.createComponent(myFactory);
      myRef.instance['commentNo'] = index;
      myRef.changeDetectorRef.detectChanges();
      myRef.instance.userReplycomment.subscribe((data) => {
        this.receiveReplyComment(data, no);
      });
      myRef.instance.deletNo.subscribe((no) => {
        myRef.destroy();
      });
    }
  }

  receiveReplyComment($event, i) {
    this.reply = $event;
    console.log($event);
    this.postComment.forEach((element) => {
      if (element['commentId'] === i) {
        element['replyComment'].push(...$event);

        this.commentService.delete(i);
        this.commentService.createComments(element);
      }
    });
    console.log(this.reply);
    this.loadComponent = false;
  }

  getComments() {
    this.commentService.getComments().subscribe((res) => {
      this.postComment = res.map((e) => {
        return {
          commentId: e.payload.doc.id,
          commentTxt: e.payload.doc.data()['commentTxt'],
          currentDate: e.payload.doc.data()['currentDate'],
          replyComment: e.payload.doc.data()['replyComment'],
          approval: e.payload.doc.data()['approval'],
          postId: e.payload.doc.data()['postId'],
          commentEmail: e.payload.doc.data()['commentEmail'],
        };
      });
      this.postComment = this.postComment.filter(
        (item) => item['postId'] === this.postId
      );
    });
  }
}
