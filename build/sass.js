const gulpSass = require('gulp-sass');
const sass = require('sass');
const autoprefixer = require('gulp-autoprefixer').default;
const cleanCSS = require('gulp-clean-css');

// Configure gulp-sass to use Dart Sass
const sassCompiler = gulpSass(sass);

const scssPath = '_scss/*.scss';
const destPath = '_site/css';

module.exports = gulp => {
  gulp.task('sass', () => {
    return gulp
      .src(scssPath)
      .pipe(
        sassCompiler({
          includePaths: ['scss'],
          outputStyle: 'expanded',
        }).on('error', sassCompiler.logError)
      )
      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false,
        })
      )
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(destPath))
      .pipe(gulp.dest('css'));
  });
};
