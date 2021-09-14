import { mkdir, readFile, rmdir, stat, writeFile } from 'fs/promises';
import { join, parse } from 'path';
import debug from 'debug';

const log = debug('fff:TempDirectory');

export class TempDirectory {
  dir: string;

  constructor(path: string) {
    this.dir = path;
  }

  /**
   * Returns the "full" path for file within the temp directory
   */
  path(filePath: string): string {
    return join(this.dir, filePath);
  }

  /**
   * Resolves to the contents of a file within the temp directory
   */
  async read(filePath: string): Promise<string> {
    const buffer = await readFile(this.path(filePath));

    return buffer.toString();
  }

  /**
   * Write a file into the temp directory
   */
  async write(filePath: string, contents: string): Promise<void> {
    log('Creating file %s with contents: %s', filePath, contents);

    const fullPath = this.path(filePath);

    // Ensure directory exists to write file to
    const parsedPath = parse(fullPath);
    try {
      await stat(parsedPath.dir);
    } catch (e: any) {
      if (e.code === 'ENOENT') {
        await mkdir(parsedPath.dir, { recursive: true });
      } else {
        throw e;
      }
    }

    // Actually write the file
    await writeFile(fullPath, contents);
  }

  /**
   * Removes the temp directory and all contents
   */
  async dispose(): Promise<void> {
    await rmdir(this.dir, { recursive: true });
  }

  toString(): string {
    return this.dir;
  }
}
