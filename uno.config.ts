import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetIcons,
  presetWebFonts,
} from 'unocss'

const remRE = /(-?[\.\d]+)rem/g
const rootFontSize = 37.5
const unoDefaultFontSize = 4
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
  postprocess: [
    util => {
      util.entries.forEach(entry => {
        const value = entry[1]
        if (value && typeof value === 'string' && remRE.test(value)) {
          console.log(value)
          entry[1] = value.replace(remRE, (_, p1) => {
            // 假如使用text-12，那么这里拿到的p1就等于3
            // p1由默认的rem基准值4转化而来,如 12px = 3rem,由此可得出倍率4
            // 由于项目一开始设置的rem基准值是37.5,那么想要uno接管这个基准值，公式应该是 37.5 / 4
            const computeRem = rootFontSize / unoDefaultFontSize
            console.log(computeRem)
            return `${p1 / computeRem}rem`
          })
        }
      })
    },
  ],
})
