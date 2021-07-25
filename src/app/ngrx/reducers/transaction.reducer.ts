import * as actions from '../actions/transaction.action';
import { Transaction } from '../models/transactions.interface';
import { v4 as uuidv4 } from 'uuid';

export function transactionReducer(state = [], action: actions.TransactionType) {
    switch(action.type) {
        case actions.ADD_TRANSACTION: {
            let transaction: Transaction = {
                categoryCode: uuidv4(),
                dates: {
                    valueDate: Date.now()
                },
                transaction: {
                    amountCurrency: {
                        amount: action.payload.amount,
                        currencyCode: 'EUR'
                    },
                    type: 'Online Transfer',
                    creditDebitIndicator: 'DBIT'
                },
                merchant: {
                    name: action.payload.account,
                    accountNumber: uuidv4()
                }
            }
            return [
                ...state,
                transaction
            ]
        }
        case actions.LOAD_TRANSACTION_SUCCESS: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}