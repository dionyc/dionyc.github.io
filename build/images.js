import { Transform } from 'stream';
import path from 'path';
import { promises as fs } from 'fs';

const imgPath = 'img/**/*.+(png|jpg|jpeg|gif|svg)';
const destPath = '_site/img';

export default gulp => {
  gulp.task('images', async () => {
    const { default: imagemin } = await import('imagemin');
    const { default: imageminMozjpeg } = await import('imagemin-mozjpeg');
    const { default: imageminPngquant } = await import('imagemin-pngquant');
    const { default: imageminSvgo } = await import('imagemin-svgo');

    const optimizeImage = new Transform({
      objectMode: true,
      async transform(file, encoding, callback) {
        if (file.isNull()) {
          return callback(null, file);
        }

        if (file.isBuffer()) {
          try {
            const plugins = [];
            const ext = path.extname(file.path).toLowerCase();
            
            if (ext === '.jpg' || ext === '.jpeg') {
              plugins.push(imageminMozjpeg({ quality: 85 }));
            } else if (ext === '.png') {
              plugins.push(imageminPngquant({ quality: [0.6, 0.8] }));
            } else if (ext === '.svg') {
              plugins.push(imageminSvgo());
            }

            if (plugins.length > 0) {
              const optimized = await imagemin.buffer(file.contents, { plugins });
              file.contents = optimized;
            }
          } catch (error) {
            console.warn(`Could not optimize ${file.path}:`, error.message);
          }
        }

        callback(null, file);
      }
    });

    return gulp
      .src(imgPath)
      .pipe(optimizeImage)
      .pipe(gulp.dest(destPath));
  });
};
