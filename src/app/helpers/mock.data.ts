import { Transactions } from '../ngrx/models/transactions.interface';

export const mockTransactions: Transactions = [
    {
        categoryCode: 'CODE-12345',
        dates: {
            valueDate: 123456789890
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

