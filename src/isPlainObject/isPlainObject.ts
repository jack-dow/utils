export type PlainObject = Record<string | number | symbol, any>;

export function isPlainObject(value: any) {
  if (!isObjectLike(value) || getType(value) !== 'Object') return false;

  if (Object.getPrototypeOf(value) === null) return true;

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);

  return Object.getPrototypeOf(value) === proto;
}

function getType(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function isObjectLike(value: any) {
  return value != null && typeof value == 'object';
}

