import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(21)).toBe('21st');
    expect(pipe.transform(42)).toBe('42nd');
    expect(pipe.transform(53)).toBe('53rd');
    expect(pipe.transform(64)).toBe('64th');
  });
});
