import { Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { of } from 'rxjs';
import { mockTransactions } from 'src/app/helpers/mock.data';

import { TransactionsComponent } from './transactions.component';

describe('Transactions Component', () => {
  let component: TransactionsComponent;

  let mockSearchPipe = {
    filter: () => ({})
  }

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

    component.ngOnInit();

    expect(component.title).toEqual('transactions list');
    expect(component.icon).toEqual('fas fa-list');
  });

  it('Should be able to set search parameters in function', () => {
    let search = 'search for transaction'
    
    expect(component.search).toEqual('');
    component.filterBy(search);
    expect(component.search).toEqual(search);
  });
});
