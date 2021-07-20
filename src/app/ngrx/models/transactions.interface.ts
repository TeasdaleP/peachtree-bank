
export interface Merchant {
    name: string;
    accountNumber: string;
}

export interface Dates {
    valueDate: number | string;
}

export interface Currency {
    amount: string | number;
    currencyCode: string;
}

export interface TransactionDetails {
    amountCurrency: Currency;
    type: string;
    creditDebitIndicator: 'CRDT' | 'DBIT';
}

export interface Transaction {
    categoryCode: string;
    dates: Dates;
    transaction: TransactionDetails;
    merchant: Merchant
}

export type Transactions = Array<Transaction>;