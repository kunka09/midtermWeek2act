import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'increment-num',
  templateUrl: './increment-num.component.html',
  styleUrls: ['./increment-num.component.css']
})
export class IncrementNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randNumber = 0;

  increment() {
    this.randNumber = this.randNumber + Number(( Math.random()*10).toFixed(0)
    )}

  decrement() {
    this.randNumber = this.randNumber - Number(( Math.random()*10).toFixed(0)
    )}

}
