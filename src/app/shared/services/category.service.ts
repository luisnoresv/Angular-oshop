import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('categories', s => s.orderByChild('name')).snapshotChanges().map(categories => {
      return categories.map(category => ({ key: category.payload.key, ...category.payload.val() }));
    });
  }
}
