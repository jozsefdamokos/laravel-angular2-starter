var gulp         = require( 'gulp' );
var del          = require( 'del' );
var autoprefixer = require( 'gulp-autoprefixer' );
var typescript   = require( 'gulp-typescript' );
var jspm         = require( 'gulp-jspm-build' );
var Elixir       = require( 'laravel-elixir' );
var compass      = require( 'laravel-elixir-sass-compass' );
var Task         = Elixir.Task;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var config = Elixir.config;

// Uncomment to see config options
// console.log( config );

// config.bowerPath = './vendor/bower_components';


// Custom elixir tasks
Elixir.extend( 'prefix', function() {
    new Task( 'prefix', function() {
        return  gulp.src( config.publicPath + '/' + config.css.outputFolder + '/*.css' )
                .pipe( autoprefixer( {
                    browsers: [ 'last 2 versions' ],
                    cascade: false
                } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.css.outputFolder ) );
    } )
    .watch( config.assetsPath + '/scss/**/*' );
} );

Elixir.extend( 'typescript', function() {
    new Task( 'typescript', function() {
        var project = typescript.createProject( 'tsconfig.json' );

        return  project.src()
                .pipe( typescript( project ) ).js
                .pipe( gulp.dest( config.publicPath + '/' + config.js.outputFolder + '/temp' ) );
    } )
    .watch( config.assetsPath + '/angular2/app/**/*' );
} );

Elixir.extend( 'jspm', function() {
    new Task( 'jspm', function() {
        return  jspm( {
                    bundleOptions: {
                        minify: config.production,
                        mangle: false
                    },
                    bundleSfx: true,
                    bundles: [
                        { src: config.publicPath + '/js/temp/main.js', dst: 'app.js' }
                    ]
                } )
                .pipe( gulp.dest( config.publicPath + '/' + config.js.outputFolder ) )
                .pipe( new Elixir.Notification( 'App bundled!' ) );
    } )
    .watch( config.publicPath + '/' + config.js.outputFolder + '/temp/**' );
} );

Elixir.extend( 'clean', function() {
    new Task( 'clean', function() {
        return del( config.publicPath + '/' + config.js.outputFolder + '/temp' );
    } );
} );


// In the MIX
Elixir( function( mix ) {

    // Custom CSS
    mix.compass( 'app.scss', config.publicPath + '/' + config.css.outputFolder, {
        sass: config.assetsPath + '/scss',
        // import_path: config.bowerPath // add bower path so we can import stuff in our sass stylesheets
    } )

    // Vendor scripts
    .scripts( [
        './node_modules/core-js/client/shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
    ], config.publicPath + '/' + config.js.outputFolder + '/vendor.js' )

    // Compile typescript
    .typescript()

    // Bundle typescript app
    .jspm()

    // Delete temp js files
    // .clean()

    // Fonts
    .copy( config.assetsPath + '/fonts', config.publicPath + '/fonts' )

    // Images
    .copy( config.assetsPath + '/images', config.publicPath + '/images' )

    // Autoprefixer
    .prefix()

    // BrowserSync
    .browserSync( { proxy: 'homestead.app' } );

} );
