export const memoize = (fn: (...args: Array<any>) => any) => {
  const cache: Record<any, any> = {};
  return (...args: Array<any>) => {
    const stringifiedArgs = JSON.stringify(args);
    const result = (cache[stringifiedArgs]
        = typeof cache[stringifiedArgs] === 'undefined' ? fn(...args) : cache[stringifiedArgs]);
    return result;
  };
};

