import { Story, Meta } from '@storybook/angular/types-6-0';
import { TransactionDetailsComponent } from './transaction-details.component';

export default {
  title: 'Modules/Transactions/TransactionDetails',
  component: TransactionDetailsComponent,
} as Meta;

export const Default: Story<TransactionDetailsComponent> = ((args: TransactionDetailsComponent) => ({
  props: args,
})).bind({});