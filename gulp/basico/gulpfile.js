const gulp = require('gulp')
const series = gulp.series

function copiar(callback) {
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('pastaB'))
    return callback()
}

module.exports.default = series(copiar)