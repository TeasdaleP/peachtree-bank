import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockTransactions } from '../helpers/mock.data';
import { State } from '../ngrx';

import { TransferValidationDirective } from './transfer-validation.directive';

@Component({
  template: `
  <input id="one" type="number" [appTransferValidation]>
  <input id="two" [appTransferValidation]>
  `})
class TestComponent {}

describe('Transfer Validation Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let store: MockStore;

  const initialState: State = {
    transactions: mockTransactions
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferValidationDirective, TestComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('Should be created', () => {
    const element = fixture.debugElement.queryAll(By.directive(TransferValidationDirective));
    expect(element).toBeDefined();
  });

  it('Should tirgger if inputted amount is £500 more than current balance', () => {

  });

  it('Should tirgger if inputted amount is not of type number', () => {

  });
});
