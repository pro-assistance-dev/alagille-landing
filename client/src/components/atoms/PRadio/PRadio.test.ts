import { mount } from '@vue/test-utils';

import PRadio from './PRadio.vue';

describe('PRadio', () => {
  //1. Тест задания и рендеринга лейбла
  test('renders label and input', () => {
    const wrapper = mount(PRadio, {
      props: {
        label: 'Test Radio',
      },
    });

    // Проверяем наличие текста label
    expect(wrapper.text()).toContain('Test Radio');

    // Проверяем наличие радио инпута
    const input = wrapper.find('input[type="radio"]');
    expect(input.exists()).toBe(true);
  });
});

describe('PRadio Styles', () => {
  //2. Тесты работы задаваемых параметрами стилей
  test('applies custom padding, margin, size, and borderRadius', () => {
    const wrapper = mount(PRadio, {
      props: {
        padding: '10px',
        margin: '5px',
        size: '24px',
        borderRadius: '50%',
      },
    });

    const box = wrapper.find('.box');
    const radioLine = wrapper.find('.radio-line');

    // Проверяем стили
    expect(radioLine.attributes('style')).toContain('padding: 10px');
    expect(radioLine.attributes('style')).toContain('margin: 5px');
    expect(box.attributes('style')).toContain('width: 24px');
    expect(box.attributes('style')).toContain('height: 24px');
    expect(box.attributes('style')).toContain('border-radius: 50%');
  });
  //3. Тесты работы параметра размера шрифта
  test('applies custom fontSize to label', () => {
    const wrapper = mount(PRadio, {
      props: {
        fontSize: '18px',
      },
    });

    const label = wrapper.find('.radio-field__label');

    // Проверяем размер шрифта label
    expect(label.attributes('style')).toContain('font-size: 18px');
  });
  //4. Тест работы выбора
  test('checks radio button when value matches model', async () => {
    const wrapper = mount(PRadio, {
      props: {
        value: 'option1',
        modelValue: 'option1',
      },
    });

    const input = wrapper.find('input[type="radio"]').element as HTMLInputElement;

    // Проверяем, что инпут отмечен, если value совпадает с modelValue
    expect(input.checked).toBe(true);
  });

  test('does not check radio button when value does not match model', async () => {
    const wrapper = mount(PRadio, {
      props: {
        value: 'option1',
        modelValue: 'option2',
      },
    });

    const input = wrapper.find('input[type="radio"]').element as HTMLInputElement;

    // Проверяем, что инпут не отмечен, если value не совпадает с modelValue
    expect(input.checked).toBe(false);
  });
});

// describe('PRadio Events', () => {
//   test('emits change event when clicked', async () => {
//     const wrapper = mount(PRadio, {
//       props: {
//         value: 'option1',
//         modelValue: '',
//       },
//     });

//     const input = wrapper.find('input[type="radio"]');

//     await input.trigger('click');

//     // Проверяем, что событие change эмитится
//     const emitted = wrapper.emitted('change');
//     expect(emitted).toBeTruthy();

//     // Проверяем, что событие содержит корректное значение
//     if (emitted && emitted[0]) {
//       expect(emitted[0]).toEqual(['option1']);
//     }
//   });
// });
