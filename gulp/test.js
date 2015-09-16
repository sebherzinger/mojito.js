var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var del = require('del');

gulp.task('modules', function () {
    return gulp.src('lib/*.js')
            .pipe(babel())
            .pipe(gulp.dest('dist/lib'));
});

gulp.task('run-tests', ['modules'], function() {
    return gulp.src('test/*.js')
            .pipe(babel())
            .pipe(gulp.dest('dist/test'))
            .pipe(mocha());
});

gulp.task('clean-tests', ['run-tests'], function() {
    del.sync(['dist/test', 'dist/lib']);
});

gulp.task('test', ['clean-tests']);
