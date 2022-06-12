import { describe, expect, it } from 'vitest';
import { toKebabCase } from './toKebabCase';

describe('toKebabCase', () => {
  it('returns the kebab cased string', () => {
    expect(toKebabCase('camelCase')).toBe('camel-case');
    expect(toKebabCase('some text')).toBe('some-text');
    expect(toKebabCase('some-mixed_string With spaces_underscores-and-hyphens')).toBe('some-mixed-string-with-spaces-underscores-and-hyphens');
    expect(toKebabCase('AllThe-small Things')).toBe('all-the-small-things');
    expect(toKebabCase('HelloWorldIAmAliveOhMyGosh')).toBe('hello-world-i-am-alive-oh-my-gosh');
  });
});
