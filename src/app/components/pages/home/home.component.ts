import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/ngrx';
import { AddTransaction } from 'src/app/ngrx/actions/transaction.action';
import { Transactions } from 'src/app/ngrx/models/transactions.interface';

import * as fromStore from '../../../ngrx/selectors/transactions.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public balance$: Observable<number>;
  public transaction$: Observable<Transactions>;

  constructor(private store: Store<State>) {
    this.balance$ = this.store.select(fromStore.getBalance);
    this.transaction$ = this.store.select(fromStore.getTransactions);
  }

  ngOnInit(): void {
  }

  public handleTransfer($event) {
    this.store.dispatch(new AddTransaction($event));
  }

}
