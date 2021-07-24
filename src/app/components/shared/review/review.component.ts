import { Component, ElementRef, EventEmitter, Input, OnInit } from '@angular/core';
import { Transfer } from 'src/app/helpers/transfer.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() public transfer: Transfer;
  @Input() public confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public open: boolean;

  constructor() {}

  ngOnInit(): void {

  }

  public close(){
    this.open = !this.open;
  }

  public confirm() {
    this.confirmed.emit(true);
    this.open = !this.open;
  }
}
