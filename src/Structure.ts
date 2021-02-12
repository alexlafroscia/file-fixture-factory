import { join } from 'path';

export type Structure = {
  [K: string]: Structure | string;
};

export function* walkStructure(
  structure: Structure,
  prependPath = ''
): Iterable<[path: string, contents: string]> {
  for (const [file, value] of Object.entries(structure)) {
    const fullPath = join(prependPath, file);

    if (typeof value === 'string') {
      yield [fullPath, value];
    } else {
      yield* walkStructure(value, fullPath);
    }
  }
}
