import { mkdtemp } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import debug from 'debug';

import { Definition, walk as walkDefinition } from './definition';
import { TempDirectory } from './TempDirectory';

const log = debug('fff:Factory');

export class Factory {
  private tempPath: string;
  private directories: Set<TempDirectory> = new Set();

  constructor(prefix: string) {
    this.tempPath = join(tmpdir(), prefix + '-');
  }

  /**
   * Creates a TempDirectory from a file structure
   */
  async createDirectory(definition: Definition): Promise<TempDirectory> {
    const directoryRoot = await mkdtemp(this.tempPath);

    log('Creating temp directory: %s', directoryRoot);

    const tempDirectory = new TempDirectory(directoryRoot);

    for (const [path, contents] of walkDefinition(definition)) {
      await tempDirectory.write(path, contents);
    }

    this.directories.add(tempDirectory);

    return tempDirectory;
  }

  /**
   * Clean up all temporary directories created by this factory
   */
  async disposeAll(): Promise<void> {
    for (const dir of this.directories) {
      await dir.dispose();
    }

    this.directories = new Set();
  }
}
