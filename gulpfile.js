const gulp = require('gulp-help')(require('gulp'));
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');

gulp.task('compile', ['views'], () => {
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
    return gulp.src('./backend/**/*.ts')
        .pipe(project())
        .pipe(gulp.dest('./app/'))
});

gulp.task('default', () => {
    return runSequence('clean', 'compile', () => {
        return nodemon({
            script: 'app/app.js',
            watch: [
                'backend/*',
                'swagger/*'],
            ext: '*',
            tasks: ['compile']
        });
    })
});

gulp.task('views', () => {
    return gulp.src('./backend/views/*')
        .pipe(gulp.dest('./app/views/'));
});

gulp.task('clean', () => {
    return gulp.src('app/*')
        .pipe(clean());
});

gulp.task('build', () => {
    console.log('App is building...');
    return runSequence('clean', 'compile', () => {
        console.log('App has been built!');
    })
});