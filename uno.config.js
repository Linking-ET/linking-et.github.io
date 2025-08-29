// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind3 from '@unocss/preset-wind3'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons(),
    ],
    // 如果需要，你还可以在这里添加 shortcuts、theme、variants 等定制
})
