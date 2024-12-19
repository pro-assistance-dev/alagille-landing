import PInputDate from './PInputDate.vue';

export default {
  title: 'Atoms/PInputDate',
  component: PInputDate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An input field for selecting and validating dates with custom masks.',
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text for the date input.' },
    label: { control: 'text', description: 'Label for the date input.' },
    margin: { control: 'text', description: 'Margin around the input.' },
    width: { control: 'text', description: 'Width of the input container.' },
  },
};

const Template = (args) => ({
  components: { PInputDate },
  setup() {
    return { args };
  },
  template: '<PInputDate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter a date',
  label: 'Date Input',
  margin: '10px',
  width: '300px',
};
