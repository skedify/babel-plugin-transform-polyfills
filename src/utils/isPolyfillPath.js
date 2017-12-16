import { resolve, sep } from 'path'

function normalize(path) {
  return path.replace(/[/\\]/g, sep)
}

const ROOT = normalize(
  `${resolve(__dirname, '..', '..')}${sep}`.replace(/[\\/]/g, '\\')
)

export default function isPolyfillPath(path) {
  return normalize(path).startsWith(ROOT)
}
