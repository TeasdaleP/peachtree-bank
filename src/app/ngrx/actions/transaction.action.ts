import { Action } from "@ngrx/store";
import { Transactions } from "../models/transactions.interface";

export const LOAD_TRANSACTION = '[TRANSACTION] Load';
export const LOAD_TRANSACTION_SUCCESS = '[TRANSACTION] Loaded Successfully';
export const TRANSACTION_FAILURE = '[TRANSACTION] Failure';

export class LoadTransaction implements Action {
    readonly type = LOAD_TRANSACTION;
    constructor() {}
}

export class LoadTransactionSuccess implements Action {
    readonly type = LOAD_TRANSACTION_SUCCESS;
    constructor(public payload: Transactions) {}
}

export class TransactionFailure implements Action {
    readonly type = TRANSACTION_FAILURE;
    constructor(public payload: any) {}
}

export type TransactionType = LoadTransaction | LoadTransactionSuccess | TransactionFailure;