import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = 0;

  constructor() { }

  countTransition() {
    this.count++;
    console.log(this.count);
  }
}
