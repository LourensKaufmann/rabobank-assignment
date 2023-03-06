import { Story, Meta } from '@storybook/angular/types-6-0';
import { TransactionsPageComponent } from './transactions-page.component';

export default {
  title: 'Pages/TransactionsPageComponent',
  component: TransactionsPageComponent,
} as Meta;

export const Default: Story<TransactionsPageComponent> = ((args: TransactionsPageComponent) => ({
  props: args,
})).bind({});