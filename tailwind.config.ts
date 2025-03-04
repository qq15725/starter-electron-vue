import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  important: true,
  plugins: [typography],
  content: ['src/renderer/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.border'),
        dark: {
          DEFAULT: theme('colors.border'),
        },
      }),
      colors: ({ colors }) => ({
        // custom
        primary: `rgba(var(--v-theme-primary), <alpha-value>)`,
        secondary: `rgba(var(--v-theme-secondary), <alpha-value>)`,
        background: `rgba(var(--v-theme-background), <alpha-value>)`,
        surface: `rgba(var(--v-theme-surface), <alpha-value>)`,
        warning: `rgba(var(--v-theme-warning), <alpha-value>)`,
        success: `rgba(var(--v-theme-success), <alpha-value>)`,
        error: `rgba(var(--v-theme-error), <alpha-value>)`,
        info: `rgba(var(--v-theme-info), <alpha-value>)`,
        border: `rgba(var(--v-border-color), var(--v-border-opacity))`,
        // colors pkg
        amber: { ...colors.amber, DEFAULT: colors.amber['400'] },
        blue: { ...colors.blue, DEFAULT: colors.blue['400'] },
        cyan: { ...colors.cyan, DEFAULT: colors.cyan['400'] },
        emerald: { ...colors.emerald, DEFAULT: colors.emerald['400'] },
        fuchsia: { ...colors.fuchsia, DEFAULT: colors.fuchsia['400'] },
        gray: { ...colors.gray, DEFAULT: colors.gray['400'] },
        green: { ...colors.green, DEFAULT: colors.green['400'] },
        indigo: { ...colors.indigo, DEFAULT: colors.indigo['400'] },
        lime: { ...colors.lime, DEFAULT: colors.lime['400'] },
        neutral: { ...colors.neutral, DEFAULT: colors.neutral['400'] },
        orange: { ...colors.orange, DEFAULT: colors.orange['400'] },
        pink: { ...colors.pink, DEFAULT: colors.pink['400'] },
        purple: { ...colors.purple, DEFAULT: colors.purple['400'] },
        red: { ...colors.red, DEFAULT: colors.red['400'] },
        rose: { ...colors.rose, DEFAULT: colors.rose['400'] },
        sky: { ...colors.sky, DEFAULT: colors.sky['400'] },
        slate: { ...colors.slate, DEFAULT: colors.slate['400'] },
        stone: { ...colors.stone, DEFAULT: colors.stone['400'] },
        teal: { ...colors.teal, DEFAULT: colors.teal['400'] },
        violet: { ...colors.violet, DEFAULT: colors.violet['400'] },
        yellow: { ...colors.yellow, DEFAULT: colors.yellow['400'] },
        zinc: { ...colors.zinc, DEFAULT: colors.zinc['400'] },
      }),
    },
  },
}
