const browserSync = require('browser-sync').create();
const cp = require('child_process');

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

const scssPath = '_scss/**/*.scss';
const jsPath = '_scripts/*.js';
const templatePath = [
  '*.html',
  '+(_includes|_layouts)/*.html',
  '*.yml',
  '_data/*.yml',
  '_posts/*',
];

module.exports = gulp => {
  const reloadBrowser = done => {
    browserSync.reload();
    done();
  };
  
  // Simple build task that copies HTML files except index.html (we have a static version)
  gulp.task('jekyll-build', () => {
    return gulp
      .src(['*.html', '*.xml', '*.txt', '!index.html'])
      .pipe(gulp.dest('_site'));
  });

  // Simplified dev build task that doesn't overwrite our static index.html
  gulp.task('jekyll-dev', () => {
    return gulp
      .src(['*.html', '*.xml', '*.txt', '!index.html'])
      .pipe(gulp.dest('_site'));
  });

  // Rebuild then reload the page
  gulp.task('jekyll-rebuild', gulp.series(['jekyll-dev', reloadBrowser]));

  gulp.task(
    'serve',
    gulp.series('jekyll-dev', () => {
      browserSync.init({
        server: {
          baseDir: '_site',
        },
      });

      gulp.watch(scssPath, gulp.series(['sass', reloadBrowser]));
      gulp.watch(jsPath, gulp.series(['scripts', reloadBrowser]));
      gulp.watch(templatePath, gulp.task('jekyll-rebuild'));
    })
  );
};
