import { useDark } from '@vueuse/core'
import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/mdi'
import '~/assets/css/vuetify-variations.scss'

export default createVuetify({
  ssr: true,
  theme: {
    defaultTheme: useDark().value ? 'dark' : 'light',
    variations: { colors: ['primary', 'secondary', 'surface'], lighten: 3, darken: 3 },
    themes: {
      light: {
        dark: false,
        colors: {
          'primary': '#10a37f',
          'on-primary': '#f7f7f8',
          'secondary': '#5436da',
          'on-secondary': '#f7f7f8',
          'error': '#B00020',
          'info': '#2196F3',
          'success': '#4CAF50',
          'warning': '#FB8C00',
          'background': '#FFFFFF',
          'on-background': '#1f2328',
          'surface': '#f6f8fa',
          'on-surface': '#1f2328',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',
        },
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.08,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.60,
          'disabled-opacity': 0.38,
          'idle-opacity': 0.04,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.12,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#F5F5F5',
          'theme-on-code': '#000000',
        },
      },
      dark: {
        dark: true,
        colors: {
          'primary': '#10a37f',
          'on-primary': '#d2f4d3',
          'secondary': '#1a7f64',
          'on-secondary': '#f7f7f8',
          'error': '#CF6679',
          'info': '#2196F3',
          'success': '#4CAF50',
          'warning': '#FB8C00',
          'background': '#2b313b',
          'on-background': '#d1d7e0',
          'surface': '#161b22',
          'on-surface': '#d1d7e0',
          'surface-bright': '#ccbfd6',
          'surface-light': '#424242',
          'surface-variant': '#a3a3a3',
          'on-surface-variant': '#424242',
        },
        variables: {
          'border-color': '#3d444d',
          'border-opacity': 1,
          'high-emphasis-opacity': 1,
          'medium-emphasis-opacity': 0.70,
          'disabled-opacity': 0.50,
          'idle-opacity': 0.10,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.16,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#343434',
          'theme-on-code': '#CCCCCC',
        },
      },
    },
  },
  icons: {
    aliases,
  },
  defaults: {
    global: {
      ripple: false,
    },
    VSliderTrack: {
      style: '--v-slider-track-size: 2px;',
    },
    VSliderThumb: {
      style: '--v-slider-thumb-size: 12px;',
    },
    VBtn: {
      style: 'text-transform: none; letter-spacing: 0px;',
    },
    VTextarea: {
      variant: 'outlined',
    },
    VTextField: {
      variant: 'outlined',
    },
    VSelect: {
      variant: 'outlined',
    },
    VCard: {
      flat: true,
      class: 'rounded-2xl',
    },
    VTooltip: {
      transition: 'none',
    },
    VDivider: {
      class: 'opacity-100',
    },
  },
})
