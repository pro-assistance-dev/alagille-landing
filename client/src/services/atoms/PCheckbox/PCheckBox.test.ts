import { mount } from '@vue/test-utils';

import PCheckBox from './PCheckBox.vue';

describe('PCheckBox', () => {
  describe('Given false v-model', () => {
    const checked = false;
    const wrapper = mount(PCheckBox, {
      props: {
        modelValue: checked,
        'onUpdate:modelValue': (e: boolean) => wrapper.setProps({ modelValue: e }),
      },
    });
    const checkbox = wrapper.find('input[type="checkbox"]');

    describe('When clicked once', async () => {
      // await checkbox.setValue(true);
      await checkbox.trigger('click');
      // await checkbox.trigger('');

      test.todo('Then false become true', async () => {
        expect(checked).toEqual(true);
        // expect(wrapper.).toEqual(true);
      });
      // test('Then icon render', async () => {
      //   expect(wrapper.classes()).toContain('check-icon');
      // });
    });
  });
});

describe('PCheckBox', () => {
  test('renders label when passed', () => {
    const wrapper = mount(PCheckBox, {
      props: {
        label: 'Test Label',
      },
    });
    const label = wrapper.find('.check-field__label');
    expect(label.exists()).toBe(true);
    expect(wrapper.text()).toContain('Test Label');
  });

  test('does not render label when not passed', () => {
    const wrapper = mount(PCheckBox);
    expect(wrapper.text()).toBe('');
  });

  test('applies padding and margin styles from props', () => {
    const wrapper = mount(PCheckBox, {
      props: {
        padding: '10px',
        margin: '5px',
      },
    });
    const checkLine = wrapper.find('.check-line');
    expect(checkLine.attributes('style')).toContain('padding: 10px');
    expect(checkLine.attributes('style')).toContain('margin: 5px');
  });

  test('applies fontSize to label from props', () => {
    const wrapper = mount(PCheckBox, {
      props: {
        fontSize: '18px',
      },
    });
    const label = wrapper.find('.check-field__label');
    expect(label.attributes('style')).toContain('font-size: 18px');
  });

  test('applies size and borderRadius styles to checkbox box', () => {
    const wrapper = mount(PCheckBox, {
      model: true,
      props: {
        size: '30px',
        borderRadius: '5px',
        value: true, // checkbox должен быть отмечен
      },
    });
    const box = wrapper.find('.box');
    expect(box.attributes('style')).toContain('width: 30px');
    expect(box.attributes('style')).toContain('height: 30px');
    expect(box.attributes('style')).toContain('border-radius: 5px');
  });

  test('renders check icon when model is true', () => {
    const wrapper = mount(PCheckBox, {
      model: true,
      props: {
        modelValue: true,
      },
    });

    const icon = wrapper.find('.check-icon');
    expect(icon.exists()).toBe(true);
  });

  test('does not render check icon when model is false', () => {
    const wrapper = mount(PCheckBox, {
      props: {
        modelValue: false,
      },
    });
    const icon = wrapper.find('.check-icon');
    expect(icon.exists()).toBe(false);
  });
});
