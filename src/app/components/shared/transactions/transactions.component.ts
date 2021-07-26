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
  public sortedTransactions: Transactions;
  public search = '';
  public title: string;
  public icon: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'transactions list';
    this.icon = 'fas fa-list';
    this.transactions.subscribe((transactions) => {
      this.sortedTransactions = this.sortedData(transactions);
    });
  }

  public filterBy(event): void {
    this.search = event;
  }

  private sortedData(unSortedData: Transactions): Transactions {
    return unSortedData.slice().sort((a, b) => {
      return (new Date(b.dates.valueDate) as any) - (new Date(a.dates.valueDate) as any);
    });
  }
}
