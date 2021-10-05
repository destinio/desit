import boxen from 'boxen'
import { format } from 'date-fns'

import { clear } from './utils/clear/index.js' // The shizz man
import { Command } from 'commander'

function welcome() {
  console.log(
    boxen('Welcome to DESIT\nMore Soon!!\n\n--help : for more options', {
      padding: 1,
      borderStyle: 'classic',
      backgroundColor: '#333',
    })
  )
}

/**
 * Main init function
 */
function init() {
  clear()
  process.argv[2] ?? welcome()

  const program = new Command()

  program.version('0.2.0').description('Just trying to find a better way')

  program.option('-t, --today', 'Show info about today. Time and such')

  program.parse()

  const { today } = program.opts()

  today &&
    console.log(`
  ${format(new Date(), 'h:mm aaaa - dd LLL')}
  ${new Date()}
  ${Date.now()}
  `)
}

export { init }
