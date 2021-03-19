import { stat } from 'fs/promises';
import { existsSync } from 'fs';
import { Factory } from './Factory';

test('creating a structure in the file system', async function () {
  const factory = new Factory('fff-Factory-test');

  // Test creation
  const dir = await factory.createStructure({
    'index.txt': 'Hello, world',
    folder: {
      'bar.txt': 'Hello, other world',
      'baz.txt': 'Hello, other other world',
    },
  });

  // Test out reading files
  expect(await dir.read('index.txt')).toBe('Hello, world');
  expect(await dir.read('folder/bar.txt')).toBe('Hello, other world');
  expect(await dir.read('folder/baz.txt')).toBe('Hello, other other world');

  // Ensure path is accesssible
  const pathStat = await stat(dir.dir);
  expect(pathStat.isDirectory()).toBe(true);

  // Test clean-up
  await dir.dispose();

  expect(existsSync(dir.dir)).toBe(false);
});

test('nesting directories', async function () {
  const factory = new Factory('fff-Factory-test');

  // Test creation
  const dir = await factory.createStructure({
    foo: {
      bar: {
        baz: 'bop',
      },
    },
  });

  expect(await dir.read('foo/bar/baz')).toBe('bop');

  await dir.dispose();
});

test('a factory can clean up all structure files', async function () {
  const factory = new Factory('fff-Factory-test-all');

  const [first, second] = await Promise.all([
    factory.createStructure({
      'foo.txt': 'foo',
    }),
    factory.createStructure({
      'bar.txt': 'bar',
    }),
  ]);

  expect(existsSync(first.dir)).toBe(true);
  expect(existsSync(second.dir)).toBe(true);

  await factory.disposeAll();

  expect(existsSync(first.dir)).toBe(false);
  expect(existsSync(second.dir)).toBe(false);
});
