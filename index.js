#!/usr/bin/env node

/**
 * CLI NAME
 *
 * Welcome to message
 *
 * @author Destin Lee <https://destin.io/>
 * @description Description of package
 * @license MIT
 */

// Inport package.json to use version number and other info
const config = require('./package.json')

// Start APP
require('./dist').init(config)
