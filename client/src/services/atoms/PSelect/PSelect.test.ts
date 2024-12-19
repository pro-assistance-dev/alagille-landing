import { mount } from '@vue/test-utils';

import PSelect from './PSelect.vue';

describe('PSelect', () => {
  // 1. Тест рендеринга label и placeholder
  test('renders label and placeholder', () => {
    const wrapper = mount(PSelect, {
      props: {
        label: 'Select Label',
        placeholder: 'Choose an option',
      },
    });

    // Проверяем, что label отображается
    expect(wrapper.text()).toContain('Select Label');
    // Проверяем, что placeholder присутствует
    expect(wrapper.find('option').text()).toBe('Choose an option');
  });

  //2. Тест кнопки очистки (clearable)
  test('clears selection when clear button is clicked', async () => {
    const wrapper = mount(PSelect, {
      props: {
        clearable: true,
        value: 'option1',
      },
    });

    const clearButton = wrapper.find('.clear');
    await clearButton.trigger('click');

    // Проверяем, что срабатывают события очистки и изменения
    expect(wrapper.emitted('clear')).toBeTruthy();
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  //3. Тест применения пользовательских стилей
  test('applies custom styles', () => {
    const wrapper = mount(PSelect, {
      props: {
        width: '200px',
        margin: '10px',
        padding: '5px',
      },
    });

    const selectField = wrapper.find('.text-field');

    // Проверяем, что стили применены
    expect(selectField.attributes('style')).toContain('width: 200px');
    expect(selectField.attributes('style')).toContain('margin: 10px');
    expect(selectField.attributes('style')).toContain('padding: 5px');
  });

  // Тест события изменения значения
  // test('emits change event on selection', async () => {
  //   const wrapper = mount(PSelect, {
  //     props: {
  //       value: 'option1',
  //     },
  //     slots: {
  //       default: '<option value="option1">Option 1</option>',
  //     },
  //   });

  //   const select = wrapper.find('select');
  //   await select.trigger('change');

  //   // Проверяем, что событие change срабатывает
  //   expect(wrapper.emitted('change')).toBeTruthy();
  //   expect(wrapper.emitted('change')![0]).toEqual(['option1']);
  // });
});
