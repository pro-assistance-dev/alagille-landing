import { mount } from '@vue/test-utils';

import PSticky from './PSticky.vue';

describe('PSticky', () => {
  //1. Тест рендеринга контента слота
  test('renders slot content', () => {
    const wrapper = mount(PSticky, {
      slots: {
        default: '<div class="sticky-content">Sticky Content</div>',
      },
    });

    // Проверяем, что слот с контентом рендерится
    expect(wrapper.find('.sticky-content').exists()).toBe(true);
    expect(wrapper.text()).toContain('Sticky Content');
  });

  //2. Тест применения пользовательских стилей
  test('applies custom styles', () => {
    const wrapper = mount(PSticky, {
      props: {
        zIndex: 10,
        top: '50px',
        background: 'blue',
        padding: '100px',
      },
    });

    const stickyBlock = wrapper.find('.sticky-block');

    // Проверяем, что стили применены
    expect(stickyBlock.attributes('style')).toContain('z-index: 11');
    expect(stickyBlock.attributes('style')).toContain('top: 50px');
    expect(stickyBlock.attributes('style')).toContain('background: blue');
    expect(stickyBlock.attributes('style')).toContain('padding: 100px');
  });
  //3. Тест применения background по умолчанию (inherit)
  test('applies custom styles', () => {
    const wrapper = mount(PSticky, {});

    const stickyBlock = wrapper.find('.sticky-block');

    // Проверяем, что background: inherit
    expect(stickyBlock.attributes('style')).toContain('background: inherit');
  });

  //4. Тест применения пользовательских стилей: тень включена
  test('applies correct styles when shadow is enabled', () => {
    const wrapper = mount(PSticky, {
      props: {
        shadow: true,
      },
    });

    const body = wrapper.find('.sticky-block');
    expect(body.attributes('style')).toContain('box-shadow: 0 0 5px 2px rgba(0,0,0,0.3)');
  });
  //5. Тест применения пользовательских стилей: тень выключена
  test('applies correct styles when shadow is disabled', () => {
    const wrapper = mount(PSticky, {
      props: {
        shadow: false,
      },
    });

    const body = wrapper.find('.sticky-block');
    expect(body.attributes('style')).toContain('box-shadow: none');
  });
});
