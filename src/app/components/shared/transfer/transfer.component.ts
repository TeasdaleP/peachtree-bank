import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  @Output() transferred: EventEmitter<Transfer> = new EventEmitter<Transfer>();
  public transfer: Transfer;
  public title: string;
  public icon: string;

  constructor() { }

  ngOnInit(): void {
    this.transfer = { amount: undefined, account: undefined };
    this.title = 'make transfer';
    this.icon = 'fas fa-credit-card';
  }

  public onSubmit(transferForm: NgForm) {
    // need to handle the data and emit to parent component
    console.log(this.transfer.account);
    console.log(this.transfer.amount);
    
  }
}