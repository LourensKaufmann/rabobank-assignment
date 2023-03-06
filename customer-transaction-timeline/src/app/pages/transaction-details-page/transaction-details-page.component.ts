import { Component } from '@angular/core';
import { TransactionsModule } from 'src/app/modules/transactions/transactions.module';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

@Component({
  standalone: true,
  selector: 'app-transaction-details-page',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.scss'],
  imports: [TransactionsModule, LayoutComponent],
})
export class TransactionDetailsPageComponent {}
