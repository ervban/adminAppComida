import { Subject } from 'rxjs';

export class SubjectManager<T> {
  next(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
  private subject = new Subject<T>();

  get getSubject() {
    return this.subject.asObservable();
  }

  set setSubject(value: T) {
    this.subject.next(value);
  }
}
