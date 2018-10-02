import { resolve, sep } from 'path'

function normalize(pathToNormalize) {
  return pathToNormalize.replace(/[/\\]/g, sep)
}

const ROOT = normalize(
  `${resolve(__dirname, '..', '..')}${sep}`.replace(/[\\/]/g, '\\')
)

export default function isPolyfillPath(pathToNormalize) {
  return normalize(pathToNormalize).startsWith(ROOT)
}
