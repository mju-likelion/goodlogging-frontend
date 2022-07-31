const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extentsConfigs, overrides } = createConfig({
  type: 'frontend',
})

module.exports = {
  extends: [...extentsConfigs],
  overrides: [...overrides],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
