import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() clearNumArray = new EventEmitter<number>();
  intervalId: ReturnType<typeof setInterval> = setInterval(() => {});
  // in tsconfig.app.json add the attribute "node" to the types field.
  // intervalId: NodeJS.Timer = setInterval(() => {});
  num = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickStart() {
      this.intervalId = setInterval(() => {
        this.intervalFired.emit(this.num++);
      }, 1000);
  }

  onClickStop() {
    clearInterval(this.intervalId);
    this.clearNumArray.emit();
    this.num = 0;
  }

}
