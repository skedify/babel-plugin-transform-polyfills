import { resolve, sep } from 'path'

const ROOT = `${resolve(__dirname, '..', '..')}${sep}`

export default function isPolyfillPath(path) {
  return path.startsWith(ROOT)
}
