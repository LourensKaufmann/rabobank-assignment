import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [TransactionListComponent, TransactionDetailsComponent],
  imports: [CommonModule],
  exports: [TransactionListComponent, TransactionDetailsComponent],
})
export class TransactionsModule {}
