import { Component } from '@angular/core';
import { TransactionsModule } from 'src/app/modules/transactions/transactions.module';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

@Component({
  standalone: true,
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss'],
  imports: [TransactionsModule, LayoutComponent],
})
export class TransactionsPageComponent {}
