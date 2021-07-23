import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { Transactions } from "./models/transactions.interface";
import { transactionReducer } from "./reducers/transaction.reducer";

export interface State {
    transactions: Transactions;
}

export const reducers: ActionReducerMap<State> = {
    transactions: transactionReducer,
}