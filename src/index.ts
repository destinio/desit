import boxen from 'boxen'
import readJson from 'read-package-json'

import { Command } from 'commander'
const { log } = console
/**
 * Main init function
 */
function init() {
  const program = new Command()

  program.version('0.2.0').description('Just trying to find a better way')
  program.option('-s, --start', 'start app')
  program.parse()

  log(123)
}

export { init }
