import { TempDirectory } from './TempDirectory';

test('it can be coerced to a string', function () {
  const dir = new TempDirectory('foo');

  expect(`${dir}`).toBe(dir.dir);
});
