import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: '',
    redirectTo: '/transactions',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
