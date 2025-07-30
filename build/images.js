const imagePath = 'img/**/*';
const destPath = '_site/img';

module.exports = gulp => {
  gulp.task('images', () => {
    return gulp
      .src(imagePath)
      .pipe(gulp.dest(destPath));
  });
};
