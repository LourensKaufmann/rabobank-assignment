import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label-value-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-value-currency.component.html',
  styleUrls: ['./label-value-currency.component.scss']
})
export class LabelValueCurrencyComponent {
  // TODO: Test these inputs rendering correctly
  @Input() currencyCode?: string;
  @Input() showPlusSymbolIfPositive: boolean = false;
  @Input() amount: number = 0;
}
