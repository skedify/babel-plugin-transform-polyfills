import { name } from '../../package.json'
import createImport from './createImport'
import isPolyfillPath from './isPolyfillPath'

export default function createNewConstructorTransform(className) {
  return {
    NewExpression(path, { file }, { types: t }) {
      const { filename } = file.opts

      if (isPolyfillPath(filename)) {
        return
      }

      if (path.node.callee.name !== className) {
        return
      }

      const identifier = createImport(
        file,
        `_create_${className}`,
        `${name}/polyfills/${className}`
      )

      path.replaceWith(t.callExpression(identifier, path.node.arguments))
    },
  }
}
