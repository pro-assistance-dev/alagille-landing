import PInput from './PInput.vue';

export default {
  title: 'Atoms/PInput',
  component: PInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible input field with customizable mask, border color, and label.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'The label for the input.' },
    margin: { control: 'text', description: 'Margin around the input field.' },
    padding: { control: 'text', description: 'Padding inside the input container.' },
    mask: { control: 'text', description: 'Input mask for formatting values.' },
    borderColor: { control: 'color', description: 'Border color of the input field.' },
    color: { control: 'color', description: 'Text color inside the input field.' },
    disabled: { control: 'boolean', description: 'Disables the input field.' },
  },
};

const Template = (args) => ({
  components: { PInput },
  setup() {
    return { args };
  },
  template: '<PInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Input Label',
  borderColor: '#cccccc',
  color: '#333333',
  disabled: false,
};
