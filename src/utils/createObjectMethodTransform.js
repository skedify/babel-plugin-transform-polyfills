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
    MemberExpression(path, { file }, { types: t }) {
      const { filename } = file.opts

      // Skip when already polyfilled
      if (isPolyfillPath(filename)) {
        return
      }

      // Guard against invalid types
      if (t.isIdentifier(path.node)) {
        return
      }

      // Replace with polyfill
      if (
        path.node.object.name === object &&
        path.node.property.name === property
      ) {
        path.replaceWith(createImportIdentifier(file, polyfill))
      }
    },

    CallExpression(path, { file }, { types: t }) {
      const { filename } = file.opts

      // Skip when already polyfilled
      if (isPolyfillPath(filename)) {
        return
      }

      // Guard against invalid types
      if (
        !t.isMemberExpression(path.node.callee) ||
        !t.isIdentifier(path.node.callee.object) ||
        !t.isIdentifier(path.node.callee.property)
      ) {
        return
      }

      // Replace with polyfill
      if (
        path.node.callee.object.name === object &&
        path.node.callee.property.name === property
      ) {
        path.replaceWith(
          t.callExpression(
            createImportIdentifier(file, polyfill),
            path.node.arguments
          )
        )
      }
    },
  }
}
