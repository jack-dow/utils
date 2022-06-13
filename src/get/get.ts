export function get(
  obj: any,
  path: string | Array<string>,
) {
  let result = obj;
  if (!Array.isArray(path)) path = path.split('.');

  for (const key of path) result = result[key];

  return result;
}

