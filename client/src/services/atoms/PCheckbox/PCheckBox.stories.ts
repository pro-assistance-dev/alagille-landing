import { Meta, StoryFn } from '@storybook/vue3';
import PCheckBox from './PCheckBox.vue';

export default {
  title: 'Atoms/PCheckBox',
  component: PCheckBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A customizable checkbox component with a label and custom styles.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'The label for the checkbox.' },
    fontSize: { control: 'text', description: 'Font size of the label.' },
    value: { control: 'boolean', description: 'The value of the checkbox.' },
    size: { control: 'text', description: 'Size of the checkbox.' },
    borderRadius: { control: 'text', description: 'Border radius of the checkbox.' },
    padding: { control: 'text', description: 'Padding around the checkbox.' },
    margin: { control: 'text', description: 'Margin around the checkbox.' },
    width: { control: 'text', description: 'Maximum width of the checkbox container.' },
  },
};

const Template = (args) => ({
  components: { PCheckBox },
  setup() {
    return { args };
  },
  template: '<PCheckBox v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
  size: '22px',
  fontSize: '14px',
  borderRadius: '4px',
};
