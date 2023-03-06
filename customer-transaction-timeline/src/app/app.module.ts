import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    NotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
