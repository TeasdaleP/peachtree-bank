import { mockTransactions } from "src/app/helpers/mock.data";
import { Transaction, Transactions } from "../models/transactions.interface";
import { AddTransaction, ADD_TRANSACTION, LoadTransaction, LoadTransactionSuccess, LOAD_TRANSACTION, LOAD_TRANSACTION_SUCCESS, TransactionFailure, TRANSACTION_FAILURE } from "./transaction.action";

describe('Transaction Actions', () => {

    it('Should call Load Transaction action', () => {
        const action = new LoadTransaction();
        expect(action.type).toEqual(LOAD_TRANSACTION);
    });

    it('Should call Add Transaction action', () => {
        const add: Transaction = mockTransactions[0];
        const action = new AddTransaction(add);
        expect(action.type).toEqual(ADD_TRANSACTION);
        expect(action.payload).toEqual(add); 
    })

    it('Should call Load Transaction Success action', () => {
        const success: Transactions = mockTransactions;
        const action = new LoadTransactionSuccess(success);
        expect(action.type).toEqual(LOAD_TRANSACTION_SUCCESS);
        expect(action.payload.length).toBe(1);
        expect(action.payload).toEqual(success)
    });

    it('Should call Transaction Failure action', () => {
        const error = { status: 404, message: "Something went wrong!" };
        const action = new TransactionFailure(error);
        expect(action.type).toEqual(TRANSACTION_FAILURE);
        expect(action.payload.status).toBe(404);
        expect(action.payload).toEqual(error);
    })
})