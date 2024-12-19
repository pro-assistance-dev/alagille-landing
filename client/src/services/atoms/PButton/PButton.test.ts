import { mount } from '@vue/test-utils';

import PButton from './PButton.vue';

describe('PButton', () => {
  describe('Given text prop', () => {
    const wrapper = mount(PButton, {
      props: {
        text: 'Test',
      },
    });
    test('Then same text', () => {
      expect(wrapper.text()).toContain('Test');
    });
  });

  test('Emit click', async () => {
    const wrapper = mount(PButton);
    const btn = wrapper.find('button');
    btn.trigger('click');
    const w = wrapper.emitted();
    expect(w).toHaveProperty('click');
  });

  test('disabled', () => {
    const wrapper = mount(PButton, {
      props: {
        disabled: true,
      },
    });
    const btn = wrapper.find('button');
    expect(btn.element.disabled).toBe(true);
  });

  describe('When disabled', () => {
    const wrapper = mount(PButton, {
      props: {
        disabled: true,
      },
    });
    const btn = wrapper.find('button');

    test('Then no click', async () => {
      btn.trigger('click');
      const w = wrapper.emitted();
      expect(w).not.toHaveProperty('click');
    });
  });

  describe('When pass size', () => {
    const btn = mount(PButton, {
      props: {
        size: Sizes.XL,
      },
    });

    test('Then correct css class', async () => {
      expect(btn.classes()).toContain('p-button_base_xl');
    });

    test('Then css is dynamic', async () => {
      await btn.setProps({ size: Sizes.XS });
      expect(btn.classes()).toContain('p-button_base_xs');
    });
  });
});
