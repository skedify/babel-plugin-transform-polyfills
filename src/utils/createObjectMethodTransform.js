import { name } from '../../package.json'
import createImport from './createImport'
import isPolyfillPath from './isPolyfillPath'

function createImportIdentifier(file, polyfill) {
  return createImport(
    file,
    polyfill.split('.').join('_'),
    `${name}/polyfills/${polyfill.split('.').join('/')}`
  )
}

export default function createObjectMethodTransform(polyfill) {
  const [object, property] = polyfill.split('.')

  return {
    CallExpression(path, { file }, { types: t }) {
      const { filename } = file.opts
      if (isPolyfillPath(filename)) {
        return
      }

      // Special cases: apply & call
      if (
        t.isMemberExpression(path.node.callee) &&
        t.isMemberExpression(path.node.callee.object) &&
        t.isIdentifier(path.node.callee.property) &&
        ['apply', 'call'].includes(path.node.callee.property.name) &&
        path.node.callee.object.object.name === object &&
        path.node.callee.object.property.name === property
      ) {
        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              createImportIdentifier(file, polyfill),
              path.node.callee.property
            ),
            path.node.arguments
          )
        )
        return
      }

      // Skip when it is not object.property
      if (
        !t.isMemberExpression(path.node.callee) ||
        !t.isIdentifier(path.node.callee.object) ||
        !t.isIdentifier(path.node.callee.property) ||
        path.node.callee.object.name !== object ||
        path.node.callee.property.name !== property
      ) {
        return
      }

      // Happy case, replace with polyfill + import
      path.replaceWith(
        t.callExpression(
          createImportIdentifier(file, polyfill),
          path.node.arguments
        )
      )
    },
  }
}
