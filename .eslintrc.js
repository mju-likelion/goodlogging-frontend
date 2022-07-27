const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extentsConfigs, overrides } = createConfig({
  type: 'frontend',
})

module.exports = {
  extends: [...extentsConfigs],
  overrides: [...overrides],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
