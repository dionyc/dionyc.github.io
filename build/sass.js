const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const scssPath = '_scss/*.scss';
const destPath = '_site/css';

module.exports = gulp => {
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
