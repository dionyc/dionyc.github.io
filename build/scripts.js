import eslint from 'gulp-eslint-new';
import terser from 'gulp-terser';

const jsPath = '_scripts/*.js';
const destPath = '_site/js';

export default gulp => {
  gulp.task('scripts', () => {
    return (
      gulp
        .src(jsPath)
        .pipe(
          eslint({
            overrideConfigFile: 'eslint.config.js',
          })
        )
        .pipe(eslint.format())
        // .pipe(terser())
        .pipe(gulp.dest(destPath))
        .pipe(gulp.dest('js'))
    );
  });
};
