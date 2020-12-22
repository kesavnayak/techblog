import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  getCategories() {
    return this.firestore.collection('category').snapshotChanges();
  }
}
