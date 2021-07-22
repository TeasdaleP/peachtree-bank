import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentBalance: number = 987.65;

  constructor() { }

  ngOnInit(): void {
  }

  public handleTransfer($event) {
    console.log($event);
  }

}
