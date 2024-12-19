import { Meta, StoryFn } from '@storybook/vue3';
import PFlex from './PFlex.vue';

export default {
  title: 'Atoms/PFlex',
  component: PFlex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible container for arranging content with custom styles.',
      },
    },
  },
  argTypes: {
    margin: { control: 'text', description: 'Margin around the flex container.' },
    padding: { control: 'text', description: 'Padding inside the flex container.' },
    width: { control: 'text', description: 'Width of the flex container.' },
    minWidth: { control: 'text', description: 'Minimum width of the container.' },
    maxWidth: { control: 'text', description: 'Maximum width of the container.' },
    height: { control: 'text', description: 'Height of the container.' },
    justifyContent: { control: 'text', description: 'Alignment of items along the main axis.' },
    alignItems: { control: 'text', description: 'Alignment of items along the cross axis.' },
    background: { control: 'color', description: 'Background color of the container.' },
  },
};

const Template = (args) => ({
  components: { PFlex },
  setup() {
    return { args };
  },
  template: '<PFlex v-bind="args">Content inside the container</PFlex>',
});

export const Default = Template.bind({});
Default.args = {
  margin: '10px',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f0f0f0',
};
