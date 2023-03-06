import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, single, mergeMap } from 'rxjs';
import ITransactionDay, { ITransaction } from '../types/transaction.type';

const API_URL = 'http://localhost:8080/api/transactions';

interface ITransactionsApiResponse {
  days: ITransactionDay[];
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsApiRespone: Observable<ITransactionsApiResponse>;

  constructor(private httpClient: HttpClient) {
    this.transactionsApiRespone =
      this.httpClient.get<ITransactionsApiResponse>(API_URL);
  }

  get transactionDays(): Observable<ITransactionDay[]> {
    return this.transactionsApiRespone.pipe(map((x) => x.days));
  }

  transactionByIdOnDate(transactionId: number, transactionDate: string): Observable<ITransaction> {
    return this.transactionsApiRespone.pipe(
      mergeMap((x) => x.days),
      single(x => x.id === transactionDate),
      mergeMap((x) => x.transactions),
      single((x) => x.id === transactionId)
    );
  }
}
