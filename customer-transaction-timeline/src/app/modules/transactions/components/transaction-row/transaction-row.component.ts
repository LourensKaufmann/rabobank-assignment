import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss']
})
export class TransactionRowComponent {
  @Input() amount: number = 0;
  @Input() currencyRate?: number;
  @Input() name?: string;
  @Input() to?: string | any[] | null | undefined;;
}
