import { Component } from '@angular/core';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

@Component({
  standalone: true,
  selector: 'app-transaction-details-page',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.scss'],
  imports: [LayoutComponent],
})
export class TransactionDetailsPageComponent {}
