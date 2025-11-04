import type { StorybookConfig } from '@storybook/react-vite'
import { join, dirname, resolve } from 'path'

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = {
      alias: {
        '@domain': resolve(__dirname, '../packages/domain/src'),
        'backend': resolve(__dirname, '../apps/backend/src'),
        '@components': resolve(__dirname, '../src/components'),
        '@views': resolve(__dirname, '../src/views'),
        '@hooks': resolve(__dirname, '../src/hooks'),
        '@services': resolve(__dirname, '../src/services'),
        '@types': resolve(__dirname, '../src/types'),
        '@helpers': resolve(__dirname, '../src/helpers'),
      },
    }
    return config
  }
}
export default config