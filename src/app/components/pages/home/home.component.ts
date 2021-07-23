import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/ngrx';

import * as fromStore from '../../../ngrx/selectors/transactions.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public balance$: Observable<number>;
  public currentBalance: number = 987.65;


  constructor(private store: Store<State>) {
    this.balance$ = this.store.select(fromStore.getBalance)
  }

  ngOnInit(): void {
  }

  public handleTransfer($event) {
    console.log($event);
  }

}
