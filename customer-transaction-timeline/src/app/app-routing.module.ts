import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TransactionDetailsPageComponent } from './pages/transaction-details-page/transaction-details-page.component';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsPageComponent
  },
  {
    path: 'transactions/:id',
    component: TransactionDetailsPageComponent
  },
  {
    path: '',
    redirectTo: '/transactions',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
