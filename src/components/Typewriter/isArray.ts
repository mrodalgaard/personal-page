// Keep types after Array.isArray() check (see https://github.com/microsoft/TypeScript/issues/17002)
type X<T> = Exclude<unknown, T> extends never ? T[] : T extends Iterable<infer U> ? U[] : unknown[];
type X2<T> = Exclude<unknown, T> extends never ? unknown : unknown;

function isArray<T>(a: T | X2<T>): a is X<T>;
function isArray(a: unknown): boolean {
  return Array.isArray(a);
}

export { isArray };
