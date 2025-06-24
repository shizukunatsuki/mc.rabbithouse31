import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// 移除了 vercel 的导入，因为它不再被使用
// import vercel from '@astrojs/vercel/serverless'; 
import astroExpressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  // 关键改动 1: 将 output 从 'server' 修改为 'static'
  // 这是让 Astro 生成静态 HTML 文件的核心设置，Cloudflare Pages 需要它。
  output: 'static',

  // 关键改动 2: 完全移除 adapter 配置
  // 静态网站部署到 Cloudflare Pages 不需要任何适配器。
  // adapter: vercel({ ... }),

  // 保留所有您需要的集成
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ['poimandres', 'light-plus'],
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '0px',
      },
    }),
  ],
});