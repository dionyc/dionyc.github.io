import * as sass from 'sass';
import { Transform } from 'stream';
import path from 'path';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const scssPath = '_scss/*.scss';
const destPath = '_site/css';

export default gulp => {
  gulp.task('sass', () => {
    const compileSass = new Transform({
      objectMode: true,
      async transform(file, encoding, callback) {
        if (file.isNull()) {
          return callback(null, file);
        }

        if (file.isBuffer()) {
          try {
            // Use modern Sass API
            const result = sass.compile(file.path, {
              style: 'expanded',
              loadPaths: ['_scss', 'scss'],
            });

            file.contents = Buffer.from(result.css);
            file.extname = '.css';
          } catch (error) {
            console.error('Sass compilation error:', error.message);
            return callback(error);
          }
        }

        callback(null, file);
      }
    });

    return gulp
      .src(scssPath)
      .pipe(compileSass)
      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 3 versions', '> 1%'],
          cascade: false,
        })
      )
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(destPath))
      .pipe(gulp.dest('css'));
  });
};
