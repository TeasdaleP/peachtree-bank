import { createSelector } from "@ngrx/store";
import { State } from "..";

export const getTransactions = (state: State) => state.transactions;

export const getBalance = createSelector(
    getTransactions,
    transactions => {
        let balance = 0;
        transactions.forEach((entity) => {
            let amount = entity.transaction;
            let typeSafeAmount;
            typeSafeAmount = typeof amount.amountCurrency.amount !== 'number' ? parseInt(amount.amountCurrency.amount) : amount.amountCurrency.amount;

            if(amount.creditDebitIndicator === 'CRDT') {
                balance += typeSafeAmount;
            } else if (amount.creditDebitIndicator === 'DBIT') {
                balance -= typeSafeAmount;
            }

        });
        return balance;
    }
)