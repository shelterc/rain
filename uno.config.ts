import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetIcons,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetTypography({}),
    presetIcons({
      // 导入图标包
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
      },
      extraProperties: {},
    }),
    presetWebFonts({
      provider: 'google', // 默认提供者
      fonts: {
        // 这些将扩展默认主题
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // 自定义的
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
})
