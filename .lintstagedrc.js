const { defineLintStagedConfig } = require('@ttou/define-config')

module.exports = defineLintStagedConfig({
  '*.{ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,vue}': ['stylelint --fix', 'prettier --write']
})
