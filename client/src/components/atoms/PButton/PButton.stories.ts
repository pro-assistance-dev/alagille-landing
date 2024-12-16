import { Meta, StoryFn } from '@storybook/vue3';
import PButton from './PButton.vue';

// Конфигурация Storybook для компонента
export default {
  title: 'Atoms/PButton',
  tags: ['autodocs'], // Включить автоматическое документирование
  component: PButton,
  argTypes: {
    text: { control: 'text', description: 'Button text' },
    margin: { control: 'text', description: 'Margin around the button' },
    padding: { control: 'text', description: 'Button padding' },
    width: { control: 'text', description: 'Button width' },
    height: { control: 'text', description: 'Button height' },
    fontSize: { control: 'text', description: 'Text font size' },
    skin: {
      control: 'select',
      options: ['base', 'text', 'pag', 'text_ano'], // Возможные варианты оформления
      description: 'Button appearance',
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'], // Возможные размеры
      description: 'Button size',
    },
    type: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'danger', 'warning'], // Возможные статусы
      description: 'Button type',
    },
    onClick: { action: 'click', description: 'Button click event' },
  },
} as Meta<typeof PButton>;

// Шаблон для сторис
const Template: StoryFn<typeof PButton> = (args) => ({
  components: { PButton },
  setup() {
    return { args };
  },
  template: `<PButton v-bind="args">{{ Button }}</PButton>`,
});

// Основные вариации
export const Base = Template.bind({});
Base.args = {
  text: 'Button',
  skin: 'base',
  size: 'm',
  type: 'primary',
  margin: '10px',
  padding: '10px 20px',
  width: '100px',
};

// export const Primary = Template.bind({});
// Primary.args = {
//   text: 'Primary Button',
//   skin: 'primary',
//   size: 'm',
//   type: 'neutral',
//   width: '150px',
//   height: '50px',
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   text: 'Danger Button',
//   skin: 'danger',
//   size: 'l',
//   type: 'error',
//   fontSize: '18px',
//   padding: '15px',
// };

// export const CustomSize = Template.bind({});
// CustomSize.args = {
//   text: 'Custom Size Button',
//   width: '200px',
//   height: '60px',
//   margin: '20px',
//   fontSize: '20px',
// };

// import { Meta, StoryFn } from '@storybook/vue3';

// import PButton from './PButton.vue';

// export default {
//   title: 'Atoms/PButton',
//   component: PButton,
//   argTypes: {
//     type: {
//       control: { type: 'select' },
//       options: ['primary', 'success', 'warning', 'danger', 'neutral'],
//       defaultValue: 'primary',
//     },
//   },
// } as Meta<typeof PButton>;

// const Template: StoryFn<typeof Button> = (args) => ({
//   components: { PButton },
//   setup() {
//     return { args };
//   },
//   template: `
//     <div style="display: flex; flex-direction: row; gap: 12px;">
//       <PButton skin="base" type="primary" width="120px" margin="20px">Primary</PButton>
//       <PButton skin="base" type="info" width="120px" margin="20px">Info</PButton>
//       <PButton skin="base" type="success" width="120px" margin="20px">Success</PButton>
//       <PButton skin="base" type="warning" width="120px" margin="20px">Warning</PButton>
//       <PButton skin="base" type="danger" width="120px" margin="20px">Danger</PButton>
//       <PButton skin="base" type="neutral" width="120px" margin="20px">Neutral</PButton>
//       <PButton skin="base" type="disabled" width="120px" margin="20px">Disabled</PButton>
//     </div>
//     <div style="display: flex; flex-direction: row; gap: 12px;">
//       <PButton skin="text" type="primary" width="120px" margin="20px">Primary</PButton>
//       <PButton skin="text" type="info" width="120px" margin="20px">Info</PButton>
//       <PButton skin="text" type="success" width="120px" margin="20px">Success</PButton>
//       <PButton skin="text" type="warning" width="120px" margin="20px">Warning</PButton>
//       <PButton skin="text" type="danger" width="120px" margin="20px">Danger</PButton>
//       <PButton skin="text" type="neutral" width="120px" margin="20px">Neutral</PButton>
//       <PButton skin="text" type="del" width="120px" margin="20px">Del</PButton>
//     </div>`,
// });

// export const PrimaryButton = Template.bind({});
// PrimaryButton.args = { color: 'primary' };
