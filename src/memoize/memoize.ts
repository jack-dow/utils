export function memoize<F extends (...args: any[]) => any>(fn: F) {
  const cache: Record<any, any> = {};
  return (...args: Parameters<F>): ReturnType<F> => {
    const stringifiedArgs = JSON.stringify(args);
    const result = (cache[stringifiedArgs]
        = typeof cache[stringifiedArgs] === 'undefined' ? fn(...args) : cache[stringifiedArgs]);
    return result;
  };
}

