const gulp = require('gulp-help')(require('gulp'));
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const clean = require('gulp-clean');

gulp.task('compile', () => {
    const project = ts.createProject({
        'target': 'ES5',
        'module': 'commonjs',
        'moduleResolution': 'node',
        'sourceMap': true,
        'emitDecoratorMetadata': true,
        'experimentalDecorators': true,
        'removeComments': true,
        'noImplicitAny': false
    });
    return gulp.src('./src/**/*.ts')
        .pipe(project())
        .pipe(gulp.dest('./app/'))
});

gulp.task('default', ['clean', 'compile'], () => {
    return nodemon({
        script : 'app/app.js',
        watch: 'src/*',
        ext: '*',
        tasks: ['compile']
    });
});

gulp.task('clean', () => {
    return gulp.src('app/*')
        .pipe(clean());
});
