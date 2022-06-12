import { describe, expect, it } from 'vitest';
import { walkObject } from './walkObject';

describe('walkObject', () => {
  it('successfully walks object', () => {
    const x = {
      hello: {
        this: {
          'is my object': ':D',
        },
      },
    };
    walkObject(x, (value, path) => {
      expect(value).toBe(':D');
      expect(path).toStrictEqual(['hello', 'this', 'is my object']);
    });
  });
});
