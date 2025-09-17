import gulp from 'gulp';
import sass from './build/sass.js';
import scripts from './build/scripts.js';
import images from './build/images.js';
import sync from './build/browsersync.js';

[sass, scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', gulp.series(['sass', 'scripts', 'images']));
gulp.task('build-with-jekyll', gulp.series(['sass', 'scripts', 'images', 'jekyll-build']));
