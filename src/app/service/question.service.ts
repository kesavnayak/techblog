import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  getQuestionCategories() {
    return this.firestore.collection('questions').snapshotChanges();
  }
}
