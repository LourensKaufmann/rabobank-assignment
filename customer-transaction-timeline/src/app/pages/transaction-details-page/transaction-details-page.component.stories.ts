import { Story, Meta } from '@storybook/angular/types-6-0';
import { TransactionDetailsPageComponent } from './transaction-details-page.component';

export default {
  title: 'Pages/TransactionDetailsPageComponent',
  component: TransactionDetailsPageComponent,
} as Meta;

export const Default: Story<TransactionDetailsPageComponent> = ((args: TransactionDetailsPageComponent) => ({
  props: args,
})).bind({});