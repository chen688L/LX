import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import requireTransform from 'vite-plugin-require-transform';
import legacy from '@vitejs/plugin-legacy';
import { join } from 'node:path';
export default defineConfig(() => {
  return {
    base: './',
    server: {
      host: true
    },
    build: {
      // 禁止静态文件打包成base64，不建议开启，因为会增加js包的大小
      assetsInlineLimit: 0,
      // 压缩（混淆）代码，特殊情况下可以在prod环境中也开启，方便定位错误
      minify: true
    },

    plugins: [
      requireTransform({}), //引入require模块
      legacy()
    ],

    resolve: {
      alias: {
        '@': join(__dirname, 'src')
      }
    }
  };
});

