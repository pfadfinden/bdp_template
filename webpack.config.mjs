import Encore from "@symfony/webpack-encore";

import CompressionPlugin from "compression-webpack-plugin";

import path from "path";
import { fileURLToPath } from 'url';
import ImageminWebpWebpackPlugin from "imagemin-webp-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('Resources/Public/Build/')
    // public path used by the web server to access the output path
    .setPublicPath('/typo3conf/ext/bdp_template/Resources/Public/Build')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('typo3conf/ext/bdp_template/Resources/Public/Build')
    .addAliases({
        '@': path.resolve( __dirname,'Resources/Private/Source/'),
        Images: path.resolve( __dirname,'Resources/Private/Source/Images/'),
        Fonts: path.resolve( __dirname,'Resources/Private/Source/Fonts/')
    })

    // Copy some static images to your -> https://symfony.com/doc/current/frontend/encore/copy-files.html
    .copyFiles({
        from: path.resolve( __dirname,'Resources/Private/Source/Images/'),
        // Optional target path, relative to the output dir
        //to: 'images/[path][name].[ext]',
        includeSubdirectories: true,
        // if versioning is enabled, add the file hash too
        to: 'images/[path][name].[hash:8].[ext]',
        // only copy files matching this pattern
        pattern: /\.(png|jpg|jpeg|svg)$/
    })

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('pfadfinden', './Resources/Private/Source/JavaScript/main.js')
    .addEntry('pfadfinden-news-list', './Resources/Private/Source/JavaScript/news/news-list.js')
    .addEntry('pfadfinden-news-detail', './Resources/Private/Source/JavaScript/news/news-detail.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    //.enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader(() => {}, {
        resolveUrlLoader: false,
        resolveUrlLoaderOptions: {
            debug: true,
            root: true
        }
    })
    .enablePostCssLoader()


// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()

// uncomment if you use API Platform Admin (composer require api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/admin.js')
;

// add compression
if(Encore.isProduction()) {
    Encore.addPlugin(new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 9 },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
    }))
    .addPlugin(new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
    }));
    Encore.addPlugin(new ImageminWebpWebpackPlugin({
        config: [{
            test: /\.(jpe?g|png)/,
            options: {
                quality:  75
            }
        }],
        overrideExtension: false,
        detailedLogs: false,
        silent: false,
        strict: true
    }))
}
export default Encore.getWebpackConfig();

