import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { RouterModule } from '@angular/router';
import { DetailsGridComponent } from 'src/app/shared/components/details-grid/details-grid.component';
import { LabelPropertyComponent } from 'src/app/shared/components/label-property/label-property.component';
import { LabelValueTextComponent } from 'src/app/shared/components/label-value-text/label-value-text.component';
import { LabelValueDateonlyComponent } from 'src/app/shared/components/label-value-dateonly/label-value-dateonly.component';
import { LabelValueTimeonlyComponent } from 'src/app/shared/components/label-value-timeonly/label-value-timeonly.component';
import { LabelValueCurrencyComponent } from 'src/app/shared/components/label-value-currency/label-value-currency.component';
import { NavigationButtonComponent } from 'src/app/shared/components/navigation-button/navigation-button.component';
import { TransactionRowComponent } from './components/transaction-row/transaction-row.component';
import { ConvertedCurrencyPipe } from 'src/app/shared/pipes/converted-currency.pipe';

@NgModule({
  declarations: [TransactionListComponent, TransactionDetailsComponent, TransactionRowComponent],
  imports: [
    CommonModule,
    RouterModule,
    DetailsGridComponent,
    LabelPropertyComponent,
    LabelValueTextComponent,
    LabelValueDateonlyComponent,
    LabelValueTimeonlyComponent,
    LabelValueCurrencyComponent,
    NavigationButtonComponent,
    ConvertedCurrencyPipe,
  ],
  exports: [TransactionListComponent, TransactionDetailsComponent],
})
export class TransactionsModule {}
