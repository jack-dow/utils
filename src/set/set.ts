import { isPlainObject } from '../isPlainObject/isPlainObject';

export const set = (obj: any, path: string | string[], value: any, pathSeparator = '.') => {
  const pList = Array.isArray(path) ? path : path.split(pathSeparator);
  const len = pList.length;
  // changes second last key to {}
  for (let i = 0; i < len - 1; i++) {
    const elem = pList[i];
    if (!obj[elem] || !isPlainObject(obj[elem]))
      obj[elem] = {};

    obj = obj[elem];
  }

  // set value to second last key
  obj[pList[len - 1]] = value;
};
