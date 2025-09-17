import gulpSass from 'gulp-sass';
import * as sassCompiler from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(sassCompiler);
const scssPath = '_scss/*.scss';
const destPath = '_site/css';

export default gulp => {
  gulp.task('sass', () => {
    return gulp
      .src(scssPath)
      .pipe(
        sass({
          includePaths: ['scss'],
          outputStyle: 'expanded',
        })
      )
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
