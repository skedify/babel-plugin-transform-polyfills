import transformString_prototype_padStart from './String.prototype.padStart'
import transformArray_prototype_includes from './Array.prototype.includes'
import transformObject_assign from './Object.assign'

const transforms = [
  transformString_prototype_padStart,
  transformArray_prototype_includes,
  transformObject_assign,
]

export default transforms
