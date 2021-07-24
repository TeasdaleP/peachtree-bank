import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transactions } from 'src/app/ngrx/models/transactions.interface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @Input() public transactions: Observable<Transactions>;
  public title: string;
  public icon: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'transactions list';
    this.icon = 'fas fa-list';
  }

}
