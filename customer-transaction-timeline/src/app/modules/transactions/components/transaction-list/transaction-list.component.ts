import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import ITransactionDay, { ITransaction } from '../../types/transaction.type';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent {
  readonly transactionDays: Observable<ITransactionDay[]>;

  constructor(private transactionService: TransactionService) {
    this.transactionDays = transactionService.transactionDays;
  }
}
