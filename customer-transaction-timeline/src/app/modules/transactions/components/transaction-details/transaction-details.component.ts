import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { ITransaction } from '../../types/transaction.type';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent {
  
  transaction?: ITransaction;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {
    const transactionDate = route.snapshot.paramMap.get('transactionDate')!;
    const transactionId = route.snapshot.paramMap.get('transactionId')!;
    
    transactionService.transactionByIdOnDate(
      parseInt(transactionId),
      transactionDate
    ).subscribe(transaction => this.transaction = transaction);
  }
}
