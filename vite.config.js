import { defineConfig } from "vite";
import {dirname, resolve} from "node:path"
import {fileURLToPath} from "node:url"
import typo3 from "vite-plugin-typo3";
import { compression, defineAlgorithm } from 'vite-plugin-compression2'
import tailwindcss from "@tailwindcss/vite";
import {constants} from "zlib"
import path from 'path';

const VITE_OUTPUT_PATH =  "Resources/Public/Build/";

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    base: "",
    plugins: [
        typo3({target: 'extension'}),
        tailwindcss(),
        compression({
            algorithms: [
                defineAlgorithm('deflate', { level: 9 }),
                defineAlgorithm('brotliCompress', {
                    params: {
                        [constants.BROTLI_PARAM_QUALITY]: 11
                    }
                })
            ],
            exclude: [/\.(br)$/, /\.(gz)$/],
            deleteOriginalAssets: false,
        }),
    ],
    build: {
        cssCodeSplit: true,
        manifest: true,
        assetsInlineLimit: 0,
        commonjsOptions: {
            transformMixedEsModules: true
        },
        outDir: resolve(currentDir, VITE_OUTPUT_PATH),
        rollupOptions: {
            output: {
                entryFileNames: 'Js/[name]-[hash].js', // If you need a specific file name, comment out
                chunkFileNames: 'Js/[name]-[hash].js', // these lines and uncomment the bottom ones
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
        lib: {
            formats: ["es"],
        }
    },
    optimizeDeps: {
        include: ['Swiper']
    },
    resolve: {
        alias: {
            'PImages': path.resolve(__dirname, 'Resources/Public/Images/'),
            'Images': path.resolve(__dirname, 'Resources/Private/Sources/Images/'),
        },
    },
});
