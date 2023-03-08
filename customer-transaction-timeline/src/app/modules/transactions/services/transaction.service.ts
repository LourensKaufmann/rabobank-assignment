import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, single, mergeMap } from 'rxjs';
import ITransactionDay, { ITransaction } from '../types/transaction.type';

const API_URL = 'http://localhost:8080/api/transactions'; // TODO: Move to .env

export interface ITransactionsApiResponse {
  days: ITransactionDay[];
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsApiResponse$: Observable<ITransactionsApiResponse>;

  constructor(private httpClient: HttpClient) {
    this.transactionsApiResponse$ =
      this.httpClient.get<ITransactionsApiResponse>(API_URL);
  }

  get transactionDays(): Observable<ITransactionDay[]> {
    return this.transactionsApiResponse$.pipe(
      map(this.mapResponseToSortedTransactionDays)
    );
  }

  transactionByIdOnDate(
    transactionId: number,
    transactionDate: string
  ): Observable<ITransaction> {
    return this.transactionsApiResponse$.pipe(
      mergeMap((x) => x.days),
      single((x) => x.id === transactionDate),
      mergeMap((x) => x.transactions),
      single((x) => x.id === transactionId)
    );
  }

  private mapResponseToSortedTransactionDays(
    response: ITransactionsApiResponse
  ): ITransactionDay[] {
    return response.days
      .sort((a, b) => {
        return new Date(a.id) < new Date(b.id) ? 1 : -1;
      })
      .map((transactionDay) => {
        return {
          ...transactionDay,
          transactions: transactionDay.transactions.sort((a, b) => {
            return new Date(a.timestamp) < new Date(b.timestamp) ? 1 : -1;
          }),
        };
      });
  }
}
