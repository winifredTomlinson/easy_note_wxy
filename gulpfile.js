var gulp = require("gulp");
var less = require('gulp-less');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var paths = {
    pages: ['src/*.html']
};

var pathComponent = {
    pages: ['src/component/*.html']
};

gulp.task('config_js', function () {
    return gulp.src('src/config_js/*/*')
        .pipe(gulp.dest('build/config_js'));
});

gulp.task('config_js_rely', function () {
    return gulp.src('src/config_js/*/*/*')
        .pipe(gulp.dest('build/config_js'));
});

gulp.task('config_js_image', function () {
    return gulp.src('src/config_js/*/*/*/*')
        .pipe(gulp.dest('build/config_js'));
});

gulp.task('config_static_js', function () {
    return gulp.src('src/config_js/*')
        .pipe(gulp.dest('build/config_js'));
});

gulp.task('component_html', function () {
    return gulp.src('src/app/component/*/*.html')
          .pipe(gulp.dest('build/app/component'));
        
});

gulp.task('fonts', function () {
    return gulp.src('src/static/fonts/*')
          .pipe(gulp.dest('build/fonts'));
        
});

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("build"));
});


gulp.task("default", function () {
    // return tsProject.src()
    //     .pipe(tsProject())
    //     .js.pipe(gulp.dest("build"));
     return gulp.src('src/static/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});

gulp.task("css", function () {
     return gulp.src('src/static/less/*.css')
        .pipe(gulp.dest('build/css'));
});

gulp.task("ueditor", function () {
     return gulp.src('src/static/less/ueditor/*.css')
        .pipe(gulp.dest('build/config_js/themes/default/css'));
});






