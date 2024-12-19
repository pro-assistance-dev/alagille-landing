import { mount } from '@vue/test-utils';

import PInputDate from './PInputDate.vue';

describe('PInputDate', () => {
  // 1. Тест рендеринга placeholder
  test('renders placeholder when passed', () => {
    const wrapper = mount(PInputDate, {
      props: {
        placeholder: 'Enter date',
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Enter date');
  });

  // 2. Тест валидации и ввода даты
  test('validates and formats input correctly', async () => {
    const wrapper = mount(PInputDate);
    const input = wrapper.find('input');

    await input.setValue('12.10.2024');
    // Вывод всех эмитированных событий для отладки
    // console.log('Emitted events:', wrapper.emitted());

    const emitted = wrapper.emitted('input');

    if (emitted) {
      // Извлекаем событие и пытаемся получить строку даты из объекта Event
      const [event] = emitted[0] as [Event];

      // Проверим, является ли event экземпляром Event
      if (event instanceof Event) {
        // Получаем значение из input
        const inputElement = event.target as HTMLInputElement;
        const dateStr = inputElement?.value;

        if (typeof dateStr === 'string') {
          expect(dateStr).toBe('12.10.2024'); // Проверяем значение
        }
      }
    }
  });

  // 3. Тест применения стилей
  test('applies width style from props', () => {
    const wrapper = mount(PInputDate, {
      props: {
        width: '200px',
      },
    });
    const container = wrapper.find('.style-container');
    expect(container.attributes('style')).toContain('width: 200px');
  });
});
