import { OrderByPipe } from './order-by.pipe';
import { DATA } from 'src/mocks/courses';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order ASC by creation_date', () => {
    const items = pipe.transform(DATA, 'creation_date');
    expect(items[0].id).toBe('3');
    expect(items[1].id).toBe('2');
    expect(items[2].id).toBe('1');
  });

  it('should order DESC by creation_date', () => {
    const items = pipe.transform(DATA, 'creation_date', false);
    expect(items[0].id).toBe('1');
    expect(items[1].id).toBe('2');
    expect(items[2].id).toBe('3');
  });
});
