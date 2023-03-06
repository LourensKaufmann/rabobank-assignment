import { Story, Meta } from '@storybook/angular/types-6-0';
import { NotFoundPageComponent } from './not-found-page.component';

export default {
  title: 'Pages/NotFound',
  component: NotFoundPageComponent,
} as Meta;

export const Default: Story<NotFoundPageComponent> = ((args: NotFoundPageComponent) => ({
  props: args,
})).bind({});