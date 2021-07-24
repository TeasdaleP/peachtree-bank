import * as actions from '../actions/transaction.action';

export function transactionReducer(state = [], action: actions.TransactionType) {
    switch(action.type) {
        case actions.ADD_TRANSACTION: {
            return [
                ...state,
                action.payload
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