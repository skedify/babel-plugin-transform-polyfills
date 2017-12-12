import { name } from '../../package.json'
import createImport from './createImport'

export default function createPrototypeMethodTransform(polyfill) {
  const property = polyfill.split('.').pop()
  return {
    CallExpression(path, { file, opts: _opts }, { types: t }) {
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
