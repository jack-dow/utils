import { describe, expect, it } from 'vitest';
import { toHash } from './toHash';

describe('toCamelCase', () => {
  it('returns the correctly hashed string', () => {
    expect(toHash('Foo Bar')).toBe('erUYhM');
    const x = { hello: 'world' };
    expect(toHash(x)).toBe('erpsjL');
    expect(toHash(4120893712809312)).toBe('hJpgDb');
  });
});
