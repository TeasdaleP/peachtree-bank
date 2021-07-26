import { fakeAsync, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { DataResponse, TransactionService } from 'src/app/services/transaction.service';
import { State } from '..';
import { TransactionEffects } from './transaction.effects';
import { mockTransactions } from 'src/app/helpers/mock.data';
import * as actions from '../actions/transaction.action';

class mockTransactionService {
    getTransactions$() {
        return of(mockTransactions);
    }
}

const initialState: State = {
    transactions: mockTransactions
};

describe('Transaction Effects', () => {
    let actions$: Observable<any>;
    let effects: TransactionEffects;
    let store: MockStore<State>;
    let service: TransactionService;

    beforeEach( () => {
        TestBed.configureTestingModule({
            providers: [
                TransactionEffects,
                provideMockStore({ initialState }),
                provideMockActions( () => actions$),
                { provide: TransactionService, useClass: mockTransactionService }
            ]
        });

        effects = TestBed.inject(TransactionEffects);
        store = TestBed.inject(MockStore);
        service = TestBed.inject(TransactionService);
    });

    it('Should create Effect', () => {
        expect(effects).toBeTruthy();
    });

    it('Should be able to load transactions successfully', (done) => {
        const spy = spyOn(service, 'getTransactions$').and.callThrough();
        actions$ = of(new actions.LoadTransaction());
        effects.loadTransactions$.subscribe((result) => {
            expect(result.type).toBe(actions.LOAD_TRANSACTION_SUCCESS);
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('Should be able to catch transaction failures', fakeAsync(() => {
        const spy = spyOn(service, 'getTransactions$').and.returnValue(throwError('Error'));
        actions$ = of(new actions.LoadTransaction());
        effects.loadTransactions$.subscribe((result) => {
            expect(result.type).toEqual(actions.TRANSACTION_FAILURE);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    }));
});
