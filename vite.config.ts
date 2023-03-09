import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(process.cwd(), "src"),
            "@api": resolve(process.cwd(), "src", "api"),
            "@assets": resolve(process.cwd(), "src", "assets"),
            "@components": resolve(process.cwd(), "src", "components"),
            "@features": resolve(process.cwd(), "src", "features"),
            "@hooks": resolve(process.cwd(), "src", "hooks"),
            "@layouts": resolve(process.cwd(), "src", "layouts"),
            "@pages": resolve(process.cwd(), "src", "pages"),
            "@styles": resolve(process.cwd(), "src", "styles"),
            "@types": resolve(process.cwd(), "src", "types"),
            "@interfaces": resolve(process.cwd(), "src", "interfaces"),
        },
    },
    build: {
        assetsInlineLimit:2048
    }
});
