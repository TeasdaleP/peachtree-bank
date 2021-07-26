import { async } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockTransactions } from 'src/app/helpers/mock.data';
import * as moment from 'moment';

import { TransactionsComponent } from './transactions.component';
import { Transactions } from 'src/app/ngrx/models/transactions.interface';

describe('Transactions Component', () => {
  let component: TransactionsComponent;

  const mockSearchPipe = {
    filter: () => ({})
  };

  beforeEach(async(() => {
    component = new TransactionsComponent();
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get a list of transactions in an observable', () => {
    component.transactions = of(mockTransactions);

    component.transactions.subscribe((result) => {
      expect(result.length).toBe(1);
      expect(result[0].categoryCode).toEqual(mockTransactions[0].categoryCode);
    });
  });

  it('Should have a title and an icon defined', () => {
    expect(component.title).toBeUndefined();
    expect(component.icon).toBeUndefined();
    expect(component.sortedTransactions).toBeUndefined();

    component.transactions = of(mockTransactions);

    component.ngOnInit();
    component.transactions.subscribe((transactions) => {
      expect(component.title).toEqual('transactions list');
      expect(component.icon).toEqual('fas fa-list');
      expect(component.sortedTransactions).toBeDefined();
    });
  });

  it('Should get a sorted list of transactions', () => {
    const unSortedTransactions: Transactions = [
      {
        categoryCode: 'CODE-12345',
        dates: {
          valueDate: 1627308304 // Monday, 26 July 2021 14:05:04
        },
        transaction: {
          amountCurrency: {
            amount: 9999,
            currencyCode: 'EUR'
          },
          type: 'Salary',
          creditDebitIndicator: 'CRDT'
        },
        merchant: {
          name: 'Peachtree Bank',
          accountNumber: '12345678'
        }
      },
      {
        categoryCode: 'CODE-12345',
        dates: {
          valueDate: 1627394704 // Tuesday, 27 July 2021 14:05:04
        },
        transaction: {
          amountCurrency: {
            amount: 9999,
            currencyCode: 'EUR'
          },
          type: 'Salary',
          creditDebitIndicator: 'CRDT'
        },
        merchant: {
          name: 'Peachtree Bank',
          accountNumber: '12345678'
        }
      }
    ];

    component.transactions = of(unSortedTransactions);
    expect(component.sortedTransactions).toBeUndefined();

    component.ngOnInit();
    component.transactions.subscribe(() => {
      const expectation = component.sortedTransactions[0].transaction.creditDebitIndicator;
      const result = unSortedTransactions[0].transaction.creditDebitIndicator;
      expect(expectation).toBe(result);
    });
  });

  it('Should be able to set search parameters in function', () => {
    const search = 'search for transaction';

    expect(component.search).toEqual('');
    component.filterBy(search);
    expect(component.search).toEqual(search);
  });
});
