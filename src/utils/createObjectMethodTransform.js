import { name } from '../../package.json'
import createImport from './createImport'
import isPolyfillPath from './isPolyfillPath'

export default function createObjectMethodTransform(polyfill) {
  const [object, property] = polyfill.split('.')
  return {
    CallExpression(path, { file }, { types: t }) {
      const { filename } = file.opts
      if (isPolyfillPath(filename)) {
        return
      }
      if (
        !t.isMemberExpression(path.node.callee) ||
        !t.isIdentifier(path.node.callee.object) ||
        !t.isIdentifier(path.node.callee.property) ||
        path.node.callee.object.name !== object ||
        path.node.callee.property.name !== property
      ) {
        return
      }

      const identifier = createImport(
        file,
        polyfill.split('.').join('_'),
        `${name}/polyfills/${polyfill.split('.').join('/')}`
      )

      path.replaceWith(t.callExpression(identifier, path.node.arguments))
    },
  }
}
