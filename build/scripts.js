const eslint = require('gulp-eslint-new');
const terser = require('gulp-terser');

const jsPath = '_scripts/*.js';
const destPath = '_site/js';

module.exports = gulp => {
  gulp.task('scripts', () => {
    return (
      gulp
        .src(jsPath)
        .pipe(
          eslint({
            useEslintrc: true,
          })
        )
        .pipe(eslint.format())
        // .pipe(terser())
        .pipe(gulp.dest(destPath))
        .pipe(gulp.dest('js'))
    );
  });
};
