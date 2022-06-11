import { describe, expect, it } from 'vitest'
import { get } from './get'

const obj = {
  colors: {
    gray: {
      400: 'purple',
    },
  },
  fontFamily: 'sans-serif',
  this: {
    is: {
      really: {
        nested: 'it is!',
      },
    },
  },
}

describe('get', () => {
  it('returns correct values using string path', () => {
    expect(get(obj, 'colors.gray.400')).toBe(obj.colors.gray[400])
    expect(get(obj, 'fontFamily')).toBe(obj.fontFamily)
    expect(get(obj, 'this.is.really.nested')).toBe(obj.this.is.really.nested)
  })
  it('returns correct values using array path', () => {
    expect(get(obj, ['colors', 'gray', '400'])).toBe(obj.colors.gray[400])
    expect(get(obj, ['fontFamily'])).toBe(obj.fontFamily)
    expect(get(obj, ['this', 'is', 'really', 'nested'])).toBe(obj.this.is.really.nested)
  })
  it('returns defaultValue if set', () => {
    expect(get(obj, 'fontFamily')).toBe(obj.fontFamily)
    expect(get(obj, ['colors', 'gray', '900000'])).toBe(obj.colors.gray[400])
  })
})
