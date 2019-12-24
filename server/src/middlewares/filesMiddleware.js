import Formidable from 'formidable';
import storage from '../config/storage';

export default function createFilesMiddleware(options = {}) {
  return function filesMiddleware(req, res, next) {
    const form = new Formidable({
      type: true,
      uploadDir: storage.tempPath,
      ...options,
    });

    form.parse(req,  (err, fields, files) => {
      if (err) {
        next(err);
      }

      req.body.fields = fields;
      req.body.files = files;

      next()
    })
  }
}
