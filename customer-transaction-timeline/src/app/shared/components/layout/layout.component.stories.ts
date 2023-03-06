import { Story, Meta } from '@storybook/angular/types-6-0';
import { LayoutComponent } from './layout.component';

export default {
  title: 'Shared/Layout',
  component: LayoutComponent,
} as Meta;

export const Default: Story<LayoutComponent> = ((args: LayoutComponent) => ({
  props: args,
})).bind({});

