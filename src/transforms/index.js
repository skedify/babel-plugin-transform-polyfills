import transformString_prototype_padStart from './String.prototype.padStart'
import transformString_prototype_startsWith from './String.prototype.startsWith'
import transformArray_prototype_includes from './Array.prototype.includes'
import transformArray_prototype_find from './Array.prototype.find'
import transformArray_prototype_findIndex from './Array.prototype.findIndex'
import transformObject_assign from './Object.assign'

const transforms = [
  transformString_prototype_padStart,
  transformString_prototype_startsWith,
  transformArray_prototype_includes,
  transformArray_prototype_find,
  transformArray_prototype_findIndex,
  transformObject_assign,
]

export default transforms
