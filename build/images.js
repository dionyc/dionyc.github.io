const imgPath = 'img/**/*.+(png|jpg|gif|svg)';
const destPath = '_site/img';

module.exports = gulp => {
  gulp.task('images', async () => {
    const { default: imagemin } = await import('gulp-imagemin');
    return gulp
      .src(imgPath)
      .pipe(imagemin())
      .pipe(gulp.dest(destPath));
  });
};
