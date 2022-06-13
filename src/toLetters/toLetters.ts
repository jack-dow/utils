export function toLetters(num: number): string {
    var mod = num % 26,
        pow = num / 26 | 0,
        out = mod ? String.fromCharCode(96 + mod) : (--pow, 'z');
    return pow ? toLetters(pow) + out : out;
}