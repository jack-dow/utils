import { describe, expect, it } from 'vitest';
import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
  it('returns the camel cased string', () => {
    expect(toCamelCase('Foo Bar')).toBe('fooBar');
    expect(toCamelCase('--foo-bar--')).toBe('fooBar');
    expect(toCamelCase('__FOO_BAR__')).toBe('fOOBAR');
  });
});
