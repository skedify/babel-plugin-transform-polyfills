import { types as t } from '@babel/core'

export default function createImport(file, name, path) {
  const imported = file.path.node.body.find(
    node =>
      t.isImportDeclaration(node) &&
      t.isStringLiteral(node.source) &&
      node.source.value === path
  )

  if (imported) {
    return imported.specifiers[0].local
  }

  const identifier = file.scope.generateUidIdentifier(name)

  file.path.node.body.unshift(
    t.importDeclaration(
      [t.importDefaultSpecifier(identifier)],
      t.stringLiteral(path)
    )
  )

  return identifier
}
