import { walkStructure } from './Structure';

test('iterating over each file in the structure', function () {
  const iterable = walkStructure({
    'index.txt': 'Hello, world',
    d1: {
      'sky.txt': 'Hello, sky',
      'sea.txt': 'Hello, sea',
      d2: {
        'stars.txt': 'Hello, stars',
      },
    },
  });

  expect(Array.from(iterable)).toEqual([
    ['index.txt', 'Hello, world'],
    ['d1/sky.txt', 'Hello, sky'],
    ['d1/sea.txt', 'Hello, sea'],
    ['d1/d2/stars.txt', 'Hello, stars'],
  ]);
});

test('handling sub-directories', function () {
  const iterable = walkStructure({
    first: {
      second: {
        third: {
          file: 'content',
        },
      },
    },
  });

  expect(Array.from(iterable)).toEqual([['first/second/third/file', 'content']]);
});
