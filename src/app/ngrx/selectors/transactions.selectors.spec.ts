import { mockTransactions } from "src/app/helpers/mock.data";
import { State } from "..";

import * as selector from './transactions.selectors';

describe('Transaction Selectors', () => {
    let mockState: State = {
        transactions: mockTransactions
    };

    it('Should be able to use getTransactions to get a list of transactions', () => {
        const result = selector.getTransactions;
        expect(result.length).toEqual(1);
        
    });

    it('Should be able to get a getBalance of the transactions', () => {

    });

    it('Should see Nan types excluded from the getBalance total', () => {

    })
});