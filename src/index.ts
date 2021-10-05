const path = require('path')
const { Command } = require('commander')

const { log } = console
/**
 * Main init function
 */
function init() {
  const program = new Command()

  program.option('-s, --start', 'start app')
  program.parse()
}

module.exports = { init }
