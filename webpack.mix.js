const mix = require('laravel-mix');

mix.sass('src/app.scss', 'dist')
mix.js('src/app.js', 'dist');