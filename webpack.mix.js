const mix = require('laravel-mix');

mix.sass('src/app.scss', 'build')
mix.js('src/app.js', 'build');