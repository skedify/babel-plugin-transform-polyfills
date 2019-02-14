import transforms from './transforms'

function makeCompoundVisitor(babel) {
  const parts = []
  return Object.assign(
    (...params) => {
      parts.forEach(part => {
        part(...params, babel)
      })
    },
    {
      add(part) {
        parts.push(part)
      },
    }
  )
}

export default function polyfills(babel) {
  const visitor = {}

  transforms.forEach(transform => {
    Object.keys(transform).forEach(name => {
      if (visitor[name] === undefined) {
        visitor[name] = makeCompoundVisitor(babel)
      }

      visitor[name].add(transform[name])
    })
  })

  return {
    visitor,
  }
}
