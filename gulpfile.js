var gulp = require("gulp");
var less = require('gulp-less');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var paths = {
    pages: ['src/*.html']
};

gulp.task('testLess', function () {
    return gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("build"));
});

gulp.task("default", function () {
    // return tsProject.src()
    //     .pipe(tsProject())
    //     .js.pipe(gulp.dest("build"));
     return gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});




