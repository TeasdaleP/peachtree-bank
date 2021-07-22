import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Transfer {
  account: string;
  amount: number;
}

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() balance: number;
  public title: string = 'make transfer';
  public icon: string = 'fas fa-credit-card';
  @Output() transfer: EventEmitter<Transfer> = new EventEmitter<Transfer>();

  constructor() { }

  ngOnInit(): void {
  }

}
