import { mount } from '@vue/test-utils';

import PString from './PString.vue';

describe('PString', () => {
  // Тест рендеринга текста строки
  test('renders string text', () => {
    const wrapper = mount(PString, {
      props: {
        string: 'Test String',
      },
    });

    // Проверяем, что текст отображается
    expect(wrapper.text()).toBe('Test String');
  });

  // Тест события клика на строке
  test('emits click event on string click', async () => {
    const wrapper = mount(PString);

    const stringDiv = wrapper.find('.string');
    await stringDiv.trigger('click');

    // Проверяем, что событие клика сработало
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  // Тест применения пользовательских стилей
  test('applies custom styles', () => {
    const wrapper = mount(PString, {
      props: {
        color: 'red',
        fontSize: '20px',
      },
    });

    const stringDiv = wrapper.find('.string');

    // Проверяем, что стили применены
    expect(stringDiv.attributes('style')).toContain('color: red');
    expect(stringDiv.attributes('style')).toContain('font-size: 20px');
  });

  // Тест отображения HTML, если isHtml = true
  test('renders HTML content when isHtml is true', () => {
    const wrapper = mount(PString, {
      props: {
        isHtml: true,
        string: '<span class="html-content">HTML Content</span>',
      },
    });

    // Проверяем, что HTML содержимое рендерится
    expect(wrapper.find('.html-content').exists()).toBe(true);
    expect(wrapper.html()).toContain('<span class="html-content">HTML Content</span>');
  });
});
