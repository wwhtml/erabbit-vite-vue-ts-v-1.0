import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router", "pinia"],
        dirs: [/* "src/utils/**" */ "src/stores/**"]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        //配置scss
        scss: {
          //引入多个文件（注意字符串中不要有空格）
          additionalData: `@import "@/assets/styles/variables.scss";@import "@/assets/styles/mixins.scss";`
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 9999,
      proxy: {
        [viteEnv.VITE_API_URL]: {
          target: viteEnv.VITE_API_URL_TARGET,
          ws: false, // webstock
          changeOrigin: true, // 是否开启跨域
          rewrite: (path) => path.replace(new RegExp("^" + viteEnv.VITE_API_URL), "")
        }
      }
    }
  };
});
