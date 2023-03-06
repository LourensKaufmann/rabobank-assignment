import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';



@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
