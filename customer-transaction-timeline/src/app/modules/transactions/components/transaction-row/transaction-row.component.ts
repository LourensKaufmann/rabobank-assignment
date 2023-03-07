import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss']
})
export class TransactionRowComponent {
  @Input() name?: string;
  @Input() amount: number = 0;
  @Input() to?: string | any[] | null | undefined;;
}
