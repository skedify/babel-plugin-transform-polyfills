// Array
import transformArray_prototype_find from './Array.prototype.find'
import transformArray_prototype_findIndex from './Array.prototype.findIndex'
import transformArray_prototype_includes from './Array.prototype.includes'

// Object
import transformObject_assign from './Object.assign'

// Promise
import transformPromise_all from './Promise.all'
import transformPromise_race from './Promise.race'
import transformPromise_reject from './Promise.reject'
import transformPromise_resolve from './Promise.resolve'
import transformPromise from './Promise'

// String
import transformString_prototype_padStart from './String.prototype.padStart'
import transformString_prototype_startsWith from './String.prototype.startsWith'

const transforms = [
  // Array
  transformArray_prototype_find,
  transformArray_prototype_findIndex,
  transformArray_prototype_includes,

  // Object
  transformObject_assign,

  // Promise
  transformPromise_all,
  transformPromise_race,
  transformPromise_reject,
  transformPromise_resolve,
  transformPromise,

  // String
  transformString_prototype_padStart,
  transformString_prototype_startsWith,
]

export default transforms
