import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
  },
  // @keep-sorted
  rules: {
    'jsonc/indent': ['error', 2],
    'vue/block-lang': ['warn', {
      script: { lang: ['ts', 'tsx'] },
    }],
    'vue/enforce-style-attribute': ['warn', { allow: ['scoped'] }],
    'vue/html-indent': ['error', 2, { baseIndent: 0 }],
    'yaml/indent': ['error', 2],
  },
}, {
  files: ['**/*.json'],
  rules: {
    'style/eol-last': ['warn', 'never'],
  },
})
