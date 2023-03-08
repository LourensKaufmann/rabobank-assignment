import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { ITransaction } from '../../types/transaction.type';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent implements OnInit {
  transaction?: ITransaction;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const transactionDate =
      this.route.snapshot.paramMap.get('transactionDate')!;
    const transactionId = this.route.snapshot.paramMap.get('transactionId')!;

    this.transactionService
      .transactionByIdOnDate(parseInt(transactionId), transactionDate)
      .subscribe((transaction) => (this.transaction = transaction));
  }
}
