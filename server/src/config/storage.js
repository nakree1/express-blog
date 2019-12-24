import fse from 'fs-extra';
import path from 'path';

import { UPLOAD_DIR, UPLOAD_PATH } from './config';
import StorageError from '../utils/errors/StorageError';

const USER_DIR = 'users';
const TEMP_DIR = 'temp';

class Storage {
  constructor(base, dir) {
    this.basePath = base;
    this.baseDir = dir;

    this.tempPath = path.join(this.basePath, TEMP_DIR);

    fse.ensureDirSync(this.tempPath);
  }

  _getNewFilePath(filePath) {
    const { dir, ext, name } = path.parse(filePath);

    const newFilePath = path.format({
      dir,
      name: `${name}_${Date.now()}`,
      ext
    });

    return newFilePath;
  }

  async saveFile(dir = TEMP_DIR, filename, file) {
    try {
      const filePath = path.join(dir, filename);
      const filePathWithBase = path.join(this.basePath, filePath);

      const exist = await fse.pathExists(filePathWithBase);

      if (exist) {
        const newFilePath = this._getNewFilePath(filePath);
        const newFilePathWithBase = path.join(this.basePath, newFilePath);
        await fse.move(file.path, newFilePathWithBase);

        return newFilePath;
      } else {
        await fse.move(file.path, filePathWithBase);

        return filePath;
      }
    } catch (err) {
      console.error(err);
      throw new StorageError('Failed to save file');
    }
  }

  async saveUserFile({ file, filename, id }) {
    const dir = path.join(USER_DIR, String(id));

    return await this.saveFile(dir, filename, file);
  }
}

const storage = new Storage(UPLOAD_PATH, UPLOAD_DIR);

export default storage;

