import boxen from 'boxen'

import { clear } from './utils/clear/index.js' // The hell man
import { Command } from 'commander'

function welcome() {
  console.log(
    boxen('Welcome to DESIT\nMore Soon!!\n\n--help : for more options', {
      padding: 1,
      borderStyle: 'classic',
    })
  )
}

/**
 * Main init function
 */
function init() {
  const program = new Command()
  clear()

  program.version('0.2.0').description('Just trying to find a better way')

  process.argv[2] ?? welcome()

  program.option('--today', 'show today')

  program.parse()

  const { today } = program.opts()

  today && console.log(Date.now())
}

export { init }
