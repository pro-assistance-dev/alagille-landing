import { mount } from '@vue/test-utils';
import PTextarea from './PTextarea.vue';

describe('PTextarea', () => {
  // 1. Тест параметров стилей
  test('applies custom margin, padding, and borderColor', () => {
    const wrapper = mount(PTextarea, {
      props: {
        margin: '20px',
        padding: '15px',
        borderColor: 'red',
      },
    });

    const textField = wrapper.find('.text-field');
    const field = wrapper.find('.field');

    // Проверяем стили text-field
    expect(textField.attributes('style')).toContain('margin: 20px');
    expect(textField.attributes('style')).toContain('padding: 15px');

    // Проверяем стиль borderColor
    expect(field.attributes('style')).toContain('border-color: red');
  });

  // 2. Тест параметров по умолчанию
  test('applies default styles if no props are provided', () => {
    const wrapper = mount(PTextarea);

    const field = wrapper.find('.field');
    const textField = wrapper.find('.text-field');

    // Проверяем стили по умолчанию
    expect(field.attributes('style')).toContain('border-color: var(--input-border-color)');
    expect(textField.attributes('style')).toContain('margin: 0');
    expect(textField.attributes('style')).toContain('padding: 0');
  });

  // 3. Тест отображения label
  test('renders label when provided', () => {
    const wrapper = mount(PTextarea, {
      props: {
        label: 'Test Label',
      },
    });

    const label = wrapper.find('.text-field__label');

    // Проверяем наличие и содержимое label
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Test Label');
  });

  test('does not render label when not provided', () => {
    const wrapper = mount(PTextarea);

    const label = wrapper.find('.text-field__label');

    // Проверяем отсутствие label
    expect(label.exists()).toBe(false);
  });

  // 4. Тест работы v-model
  test('updates v-model value and emits events on input', async () => {
    const wrapper = mount(PTextarea, {
      props: {
        modelValue: 'initial value',
      },
    });

    const textarea = wrapper.find('textarea');

    // Проверяем начальное значение
    expect(textarea.element.value).toBe('initial value');

    // Ввод нового значения
    await textarea.setValue('new value');

    // Проверяем обновление значения и события
    expect(wrapper.emitted('input')).toBeTruthy();
    const emittedInputEvents = wrapper.emitted('input');
    if (emittedInputEvents) {
      expect(emittedInputEvents[0]).toEqual(['new value']);
    }
  });

  // 5. Тест работы слотов
  test('renders content in default and right slots', () => {
    const wrapper = mount(PTextarea, {
      slots: {
        default: '<span>Default Slot Content</span>',
        right: '<span>Right Slot Content</span>',
      },
    });

    const leftField = wrapper.find('.left-field');
    const rightField = wrapper.find('.right-field');

    // Проверяем содержимое слотов
    expect(leftField.html()).toContain('Default Slot Content');
    expect(rightField.html()).toContain('Right Slot Content');
  });
});
