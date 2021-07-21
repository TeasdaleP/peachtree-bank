import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { TransactionService } from "src/app/services/transaction.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as transaction from '../actions/transaction.action';
import { of } from "rxjs";

@Injectable()
export class TransactionEffects {

    @Effect()
    loadTransactions$ = this.actions$.pipe(
        ofType<transaction.LoadTransaction>(transaction.LOAD_TRANSACTION),
        mergeMap( () => {
            return this.transactionService.getTransactions$().pipe(
                map(response => {
                    return new transaction.LoadTransactionSuccess(response.data);
                }),
                catchError(error => of(new transaction.TransactionFailure(error)))
            )
        })
    )
    
    constructor(private transactionService: TransactionService, private actions$: Actions) {}
}
