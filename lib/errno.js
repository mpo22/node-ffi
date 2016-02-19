
/**
 * Implementation of errno. This is a #define :/
 * On Linux, it's a global variable with the symbol `errno`,
 * On Darwin it's a method execution called `__error`.
 * On Windows it's a method execution called `_errno`.
 */

/**
 * Module dependencies.
 */

var DynamicLibrary = require('./dynamic_library')
  , ForeignFunction = require('./foreign_function')
  , bindings = require('./bindings')
  , funcs = bindings.StaticFunctions
  , ref = require('ref')
  , errnoPtr = null
  , int = ref.types.int
  , intPtr = ref.refType(int)


module.exports = ForeignFunction(funcs._errno,  int,     [])
