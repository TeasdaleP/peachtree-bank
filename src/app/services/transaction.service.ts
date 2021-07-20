import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transactions } from '../ngrx/models/transactions.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions$(): Observable<Transactions> {
    return this.http.get<Transactions>(environment.transactionalApi);
  }
}


