const mix = require('laravel-mix');

mix.sass('src/app.scss', 'docs')
mix.js('src/app.js', 'docs');