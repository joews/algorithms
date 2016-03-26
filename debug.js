//
// debug.js
// Usage: node debug.js <path to script.js>
//
var process = require('process')
var path = require('path')

require('babel-core/register')
require('babel-polyfill')

var scriptPath = path.join(process.cwd(), process.argv[2])
require(scriptPath)
