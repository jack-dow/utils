import { describe, expect, it } from 'vitest';
import { equals } from './equals';

describe('equals', () => {
  it('returns the correct result', () => {
    expect(equals(1, 1)).toBe(true);
    expect(equals(1, '1')).toBe(false);
    expect(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' },
      { a: [2, { e: 3 }], b: [4], c: 'foo' })).toBe(true);
    expect(equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 })).toBe(true);
    expect(equals([4, 5, 6], [4, 5, 6])).toBe(true);
  });
});
