import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { debug } from 'console';
import { PostComment } from './../model/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private firestore: AngularFirestore) {}

  createComments(comment: any): any {
    var com = new PostComment();
    com.commentTxt = comment['commentTxt'];
    com.currentDate = comment['currentDate'];
    com.replyComment = comment['replyComment'];
    com.approval = comment['approval'];

    const comments = JSON.parse(JSON.stringify(com));
    return this.firestore.collection('Comments').add(comments);
  }

  getComments() {
    return this.firestore.collection('Comments').snapshotChanges();
  }

  delete(id: any) {
    if (confirm('Delete?')) {
      this.firestore.collection('Comments').doc(id).delete();
    }
  }

  deleteBack(id: any) {
    this.firestore.collection('Comments').doc(id).delete();
  }

  update(id: any, replyComment: Array<object>): any {
    this.firestore
      .collection('Comments')
      .doc(id)
      .update({ replyComment: replyComment });
  }
}
