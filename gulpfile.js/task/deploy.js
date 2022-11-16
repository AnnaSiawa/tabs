const { gulp, dest } = require("gulp");

//конфигурация
const path = require("../config/path.js");

//Плагины
const ghpages = require('gulp-gh-pages');

//обработка
const deploy = () => {
    return dest(path.deploy.dest)
        .pipe(ghpages());
}

module.exports = deploy;
