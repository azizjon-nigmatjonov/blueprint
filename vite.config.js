import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 7777,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "build",
    minify: "esbuild",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        },
    ],
},
});
