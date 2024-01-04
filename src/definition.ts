import { join } from 'path';

export type Definition = {
  [K: string]: Definition | string;
};

export function* walk(
  definition: Definition,
  prependPath = '',
): Iterable<[path: string, contents: string]> {
  for (const [file, value] of Object.entries(definition)) {
    const fullPath = join(prependPath, file);

    if (typeof value === 'string') {
      yield [fullPath, value];
    } else {
      yield* walk(value, fullPath);
    }
  }
}
