import { mount } from '@vue/test-utils';

import PFlex from './PFlex.vue';

describe('PFlex', () => {
  // 1. Тест рендеринга слота
  test('renders slot content', () => {
    const wrapper = mount(PFlex, {
      slots: {
        default: '<div class="test-content">Content</div>',
      },
    });
    const content = wrapper.find('.test-content');
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe('Content');
  });

  // 2. Тест применения стилей
  test('applies styles from props', () => {
    const wrapper = mount(PFlex, {
      props: {
        margin: '10px',
        padding: '5px',
        width: '100px',
        height: '50px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: 'red',
      },
    });

    const flexLine = wrapper.find('.flex-line');
    expect(flexLine.attributes('style')).toContain('margin: 10px');
    expect(flexLine.attributes('style')).toContain('padding: 5px');
    expect(flexLine.attributes('style')).toContain('width: 100px');
    expect(flexLine.attributes('style')).toContain('height: 50px');
    expect(flexLine.attributes('style')).toContain('justify-content: center');
    expect(flexLine.attributes('style')).toContain('align-items: flex-start');
    expect(flexLine.attributes('style')).toContain('background: red');
  });
});
