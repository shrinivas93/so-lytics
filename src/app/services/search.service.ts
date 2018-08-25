import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
  private subject: Subject<string> = new Subject<string>();
  private searchTextObservable = this.subject.asObservable();

  constructor() {}

  emitSearchText(userId: string) {
    this.subject.next(userId);
  }

  getSearchText() {
    return this.searchTextObservable;
  }
}
