import {defineConfig} from "vite"
import {dirname, resolve} from "node:path"
import {fileURLToPath} from "node:url"
import banner from 'vite-plugin-banner'
import autoOrigin from "vite-plugin-auto-origin"
import pkg from './package.json'
import {compression} from 'vite-plugin-compression2'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminWebp from 'imagemin-webp'
import imageminAvif from 'imagemin-avif'
import path from 'path';


// TYPO3 root path (relative to this config file)
const VITE_TYPO3_ROOT = "./";

// Vite input files (relative to TYPO3 root path)
const VITE_ENTRYPOINTS = [
    'Resources/Private/Source/JavaScript/Main.entry.js',
    'Resources/Private/Source/JavaScript/NewsList.entry.js',
    'Resources/Private/Source/JavaScript/NewsDetail.entry.js',
    'Resources/Private/Source/JavaScript/CalendarizeList.entry.js',
    'Resources/Private/Source/JavaScript/CalendarizeDetail.entry.js',
    'Resources/Private/Source/JavaScript/AddressList.entry.js',
    'Resources/Private/Source/JavaScript/AddressLv.entry.js',
    'Resources/Private/Source/JavaScript/Cookiemanager.entry.js',
    'Resources/Private/Source/JavaScript/InstagramList.entry.js',
];

// Output path for generated assets
const VITE_OUTPUT_PATH = "Resources/Public/Build/";

const currentDir = dirname(fileURLToPath(import.meta.url));
const rootPath = resolve(currentDir, VITE_TYPO3_ROOT);
export default defineConfig({
    base: "",
    build: {
        manifest: true,
        assetsInlineLimit: 0,
        outDir: resolve(rootPath, VITE_OUTPUT_PATH),
        target: 'es2015',
        rollupOptions: {
            input: VITE_ENTRYPOINTS.map(entry => resolve(rootPath, entry)),
            output: {
                entryFileNames: 'Js/[name]-[hash].js', // If you need a specific file name, comment out
                chunkFileNames: 'Js/[name]-[hash].js', // these lines and uncomment the bottom ones
                // entryFileNames: chunk => {
                //   if (chunk.name === 'main') {
                //     return 'js/main.min.js';
                //   }
                //   return 'js/main.min.js';
                // },
                assetFileNames: assetInfo => {
                    const info = assetInfo.name.split('.');
                    const extType = info[info.length - 1];
                    if (/\.(png|jpe?g|gif|svg|webp|webm|mp3|avif)$/.test(assetInfo.name)) {
                        return `Media/[name]-[hash].${extType}`;
                    }
                    if (/\.(css)$/.test(assetInfo.name)) {
                        return `Css/[name]-[hash].${extType}`;
                    }
                    if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
                        return `Fonts/[name]-[hash].${extType}`;
                    }
                    if (/\.(ico)$/.test(assetInfo.name)) {
                        return `[name]-[hash].${extType}`;
                    }
                    return `Other/[name]-[hash].${extType}`;
                },
            },
        },
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'Resources/Private/Source/'),
            Scss: path.resolve(__dirname, 'Resources/Private/Source/Scss/'),
            Images: path.resolve(__dirname, 'Resources/Private/Source/Images/'),
            Fonts: path.resolve(__dirname, 'Resources/Private/Source/Fonts/')
        },
    },
    plugins: [
        autoOrigin(),
        compression(),
        compression({
            algorithm: 'brotliCompress',
            exclude: [/\.(br)$/, /\.(gz)$/],
            deleteOriginalAssets: false,
            compressionOptions: {level: 11}
        }),
        banner({
            outDir: resolve(rootPath, VITE_OUTPUT_PATH),
            content: `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * license: ${pkg.license}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
        }),
        viteImagemin({
            plugins: {
                jpg: imageminMozjpeg(),
            },
            makeWebp: {
                plugins: {
                    jpg: imageminWebp(),
                    png: imageminWebp(),
                },
            },
            makeAvif: {
                plugins: {
                    jpg: imageminAvif({quality: 80}),
                    png: imageminAvif({quality: 80}),
                },
            },
        }),
    ],
    publicDir: false,
});
