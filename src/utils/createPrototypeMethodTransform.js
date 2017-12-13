import { name } from '../../package.json'
import createImport from './createImport'
import isPolyfillPath from './isPolyfillPath'

export default function createPrototypeMethodTransform(polyfill) {
  const property = polyfill.split('.').pop()
  return {
    CallExpression(path, { file }, { types: t }) {
      const { filename } = file.opts
      if (isPolyfillPath(filename)) {
        return
      }
      if (
        !t.isMemberExpression(path.node.callee) ||
        !t.isIdentifier(path.node.callee.property) ||
        path.node.callee.property.name !== property
      ) {
        return
      }

      const identifier = createImport(
        file,
        polyfill.split('.').join('_'),
        `${name}/polyfills/${polyfill.split('.').join('/')}`
      )

      path.replaceWith(
        t.callExpression(identifier, [
          path.node.callee.object,
          ...path.node.arguments,
        ])
      )
    },
  }
}
