import { describe, expect, it } from 'vitest';
import { toLetters } from './toLetters';

describe('toLetters', () => {
  it('returns the correct letters', () => {
    expect(toLetters(1)).toBe('a');
    expect(toLetters(12)).toBe('l');
    expect(toLetters(26)).toBe('z');
    expect(toLetters(30)).toBe('ad');
    expect(toLetters(900)).toBe('ahp');
    expect(toLetters(1000000000)).toBe('cfdgsxl');
  });
});
