import { describe, expect, it } from 'vitest';
import { set } from './set';

describe('set', () => {
  it('successfully sets value at correct position', () => {
    let obj = {};
    set(obj, 'hello.world', 'I am alive!');
    expect(obj).toStrictEqual({ hello: { world: 'I am alive!' } });
    obj = { hello: { world: 'This already exists' }, dont: { deleteMe: 'PLEASE!' } };
    set(obj, 'hello.world', 'I am alive!');
    expect(obj).toStrictEqual({ hello: { world: 'I am alive!' }, dont: { deleteMe: 'PLEASE!' } });
  });
});
