import { MockStore } from "@ngrx/store/testing";
import { mockTransactions } from "src/app/helpers/mock.data";
import { State } from "..";

import { getBalance } from './transactions.selectors';

describe('Transaction Selectors', () => {
    let store: MockStore<State>;
    
    const initialState: State = {
        transactions: mockTransactions
    };
    
    it('Should get a total of transactions when calling getBalance', () => {
        const result = getBalance.projector(
            initialState.transactions
        );

        expect(result).toEqual(9999);
    });

    it('Should see strings and numbers converted into getBalance total', () => {
        let mockState : State = {
            transactions: [
                {
                    categoryCode: 'CODE-12345',
                    dates: {
                        valueDate: 123456789890
                    },
                    transaction: {
                        amountCurrency: {
                            amount: 100,
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
                        valueDate: 123456789890
                    },
                    transaction: {
                        amountCurrency: {
                            amount: '100',
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
            ]
        }   
        
        const result = getBalance.projector(
            mockState.transactions
        )

        expect(result).toEqual(200);
    });
});