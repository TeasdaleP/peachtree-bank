import { mockTransactions } from 'src/app/helpers/mock.data';
import { Transfer } from 'src/app/helpers/transfer.interface';
import { ADD_TRANSACTION, LOAD_TRANSACTION, LOAD_TRANSACTION_SUCCESS, TRANSACTION_FAILURE } from '../actions/transaction.action';
import { Transactions } from '../models/transactions.interface';
import * as reducer from './transaction.reducer';

describe('Transactions Reducer', () => {

    it('Should return and empty array for inital state for load transaction', () => {
        const action = { type: LOAD_TRANSACTION } as any;
        const result = reducer.transactionReducer(undefined, action);
        expect(result).toBeDefined();
    });

    it('Should return and empty array for inital state for error failure', () => {
        const error = [{ status: 404, message: 'Something went wrong!' }];
        const action = { type: TRANSACTION_FAILURE, payload: error } as any;
        const result = reducer.transactionReducer(undefined, action);
        expect(result).toBeDefined();
    });

    it('Should return the payload for successful transactions', () => {
        const success: Transactions = mockTransactions;
        const action = { type: LOAD_TRANSACTION_SUCCESS, payload: success } as any;
        const result = reducer.transactionReducer(undefined, action);
        expect(result[0].categoryCode).toBe(success[0].categoryCode);
        expect(result[0].dates.valueDate).toBe(success[0].dates.valueDate);
    });

    it('Should add the payload to current transaction array', () => {
        const add: Transfer = {
            account: 'New Account',
            amount: 123.34
        };
        const action = { type: ADD_TRANSACTION, payload: add } as any;
        const result = reducer.transactionReducer(undefined, action);

        expect(result[0].transaction.amountCurrency.amount).toBe(add.amount);
        expect(result[0].merchant.name).toBe(add.account);
     });

});
