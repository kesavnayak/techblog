import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: Observable<any[]>;
  cards: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  getQuestionCategories() {
    return this.firestore.collection('questions').snapshotChanges();
  }

  getCards() {
    return this.firestore.collection('cards').snapshotChanges();
  }

  getDevOps() {
    return this.firestore.collection('DevOps').snapshotChanges();
  }

  getDocker() {
    return this.firestore.collection('Docker').snapshotChanges();
  }

  getSqlServer(){
    return this.firestore.collection('SqlServer').snapshotChanges();
  }
}
