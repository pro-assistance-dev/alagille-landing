import { mount } from '@vue/test-utils';

import PInput from './PInput.vue';

describe('PInput', () => {
  //1. Тест рендеринга лейбла
  test('renders label when passed', () => {
    const wrapper = mount(PInput, {
      props: {
        label: 'Test Label',
      },
    });
    const label = wrapper.find('label');
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Test Label');
  });

  test('does not render label when not passed', () => {
    const wrapper = mount(PInput);
    const label = wrapper.find('label');
    expect(label.exists()).toBe(false);
  });
  //2. Тест ввода текста
  test('emits input event with the correct value', async () => {
    const wrapper = mount(PInput);
    const input = wrapper.find('input');

    // Симуляция ввода текста
    await input.setValue('Test Input');

    // Проверка эмитированного события
    const emitted = wrapper.emitted('input');
    expect(emitted).toHaveLength(2);
    if (emitted) {
      expect(emitted[0]).toEqual(['Test Input']);
    }
  });
  //3. Тест покидания пользователем поля ввода
  test('emits blur event with the correct value', async () => {
    const wrapper = mount(PInput);
    const input = wrapper.find('input');

    // Симуляция события blur
    await input.trigger('blur');

    // Проверка эмитированного события
    const emitted = wrapper.emitted('blur');
    expect(emitted).toHaveLength(1);
  });
  //4. Тесты работы пользовательских стилей
  test('applies margin and padding styles from props', () => {
    const wrapper = mount(PInput, {
      props: {
        margin: '10px',
        padding: '5px',
      },
    });
    const textField = wrapper.find('.text-field');
    expect(textField.attributes('style')).toContain('margin: 10px');
    expect(textField.attributes('style')).toContain('padding: 5px');
  });

  test('applies borderColor and color styles from props', () => {
    const wrapper = mount(PInput, {
      props: {
        borderColor: 'red',
        color: 'blue',
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes('style')).toContain('color: blue');

    const field = wrapper.find('.field');
    expect(field.attributes('style')).toContain('border-color: red');
  });
  //5. Тесты работы маски ввода
  test('applies mask if provided', async () => {
    const wrapper = mount(PInput, {
      props: {
        mask: '###-###',
      },
    });

    const input = wrapper.find('input');

    // Симуляция ввода текста, который должен быть отформатирован по маске
    await input.setValue('123456');

    // Проверяем, что текст отображается с учётом маски
    expect(input.element.value).toBe('123-456');
  });
});
