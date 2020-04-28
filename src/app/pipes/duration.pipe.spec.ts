import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms duration < 1 hour', () => {
    expect(pipe.transform(45)).toBe('45min');
  });

  it('transforms duration without minutes', () => {
    expect(pipe.transform(120)).toBe('2h');
  });

  it('transforms duration > 1 hour', () => {
    expect(pipe.transform(95)).toBe('1h 35min');
  });
});
