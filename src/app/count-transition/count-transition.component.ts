import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-count-transition',
  templateUrl: './count-transition.component.html',
  styleUrls: ['./count-transition.component.css']
})
export class CountTransitionComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

}
