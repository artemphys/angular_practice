import { SearchPipe } from './search.pipe';
import { DATA } from 'src/mocks/courses';

describe('SearchPipe', () => {
  let pipe = new SearchPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should search by input value', () => {
    const items = pipe.transform(DATA, 'Python');
    expect(items[0].id).toBe('2');
  });

  it('should return an empty list if nothing has found', () => {
    const items = pipe.transform(DATA, 'Nonexistent');
    expect(items.length).toBe(0);
  });
});
