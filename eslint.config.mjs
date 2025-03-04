import antfu from '@antfu/eslint-config'

export default antfu( {
  vue: true,
  typescript: true,
  ignores: [
    'out',
    'dist',
    'pnpm-lock.yaml',
    'LICENSE.md',
    'tsconfig.json',
    'tsconfig.*.json',
  ]
})
