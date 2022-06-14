import { isPlainObject } from '../isPlainObject/isPlainObject';

interface IObject {
  [key: string]: any
  length?: never
}

type TUnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

const merge = <T extends IObject[]>(
  ...objects: T
): TUnionToIntersection<T[number]> =>
    objects.reduce((result, current) => {
      Object.keys(current).forEach((key) => {
        if (Array.isArray(result[key]) && Array.isArray(current[key])) {
          result[key] = merge.options.mergeArrays
            ? Array.from(new Set((result[key] as unknown[]).concat(current[key])))
            : current[key];
        }
        else if (isPlainObject(result[key]) && isPlainObject(current[key])) {
          result[key] = merge(result[key] as IObject, current[key] as IObject);
        }
        else {
          result[key] = current[key];
        }
      });

      return result;
    }, {}) as any;

interface IOptions {
  mergeArrays: boolean
}

const defaultOptions: IOptions = {
  mergeArrays: true,
};

merge.options = defaultOptions;

merge.withOptions = <T extends IObject[]>(
  options: Partial<IOptions>,
  ...objects: T
) => {
  merge.options = {
    mergeArrays: true,
    ...options,
  };

  const result = merge(...objects);

  merge.options = defaultOptions;

  return result;
};

export { merge };
