import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction, Transactions } from '../ngrx/models/transactions.interface';

export interface DataResponse {
  data: Array<Transaction>;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions$(): Observable<DataResponse> {
    return this.http.get<DataResponse>(environment.transactionalApi);
  }
}


