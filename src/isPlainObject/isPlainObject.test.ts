import { describe, expect, it } from 'vitest';
import { isPlainObject } from './isPlainObject';

function Foo() {
  return ':D';
}

describe('isPlainObject', () => {
  it('identifies objects only correctly', () => {
    expect(isPlainObject(Foo())).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('hello world')).toBe(false);
    expect(isPlainObject({ x: 0, y: '1', z: { x: 'yes' }, a: () => {} })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });
});
