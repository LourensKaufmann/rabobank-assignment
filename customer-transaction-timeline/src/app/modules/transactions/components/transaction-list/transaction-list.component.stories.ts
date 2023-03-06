import { Story, Meta } from '@storybook/angular/types-6-0';
import { TransactionListComponent } from './transaction-list.component';

export default {
  title: 'Modules/Transactions/TransactionListComponent',
  component: TransactionListComponent,
} as Meta;

export const Default: Story<TransactionListComponent> = ((args: TransactionListComponent) => ({
  props: args,
})).bind({});