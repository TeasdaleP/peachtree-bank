import { createSelector } from "@ngrx/store";
import { State } from "..";

export const getTransactions = (state: State) => state.transactions;

export const getBalance = createSelector(
    getTransactions,
    transactions => {
        let balance = 0;
        transactions.forEach((entity) => {
            let amount = entity.transaction.amountCurrency.amount;
            if(typeof amount == 'number') {
                balance += amount;
            } else {
                let parse = parseInt(amount);
                if(typeof parse == 'number') {
                    balance += parse;
                }
            }
        });
        return balance;
    }
)