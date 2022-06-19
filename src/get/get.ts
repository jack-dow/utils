export function get(
  obj: any,
  path: string | Array<string>,
  defaultValue: any = undefined,
) {
  let result = obj;
  if (!Array.isArray(path)) path = path.split('.');

  for (const key of path) {
    if (!result[key]) {
      result = defaultValue;
      break;
    }
    result = result[key];
  }

  return result;
}

