import { Command } from 'commander'
import boxen from 'boxen'

/**
 * Main init function
 */
function init() {
  const program = new Command()

  program.version('0.2.0').description('Just trying to find a better way')
  program.option('-s, --start', 'start app')
  program.parse()

  const { start } = program.opts()
  console.log(start)
  console.log(
    boxen('Welcom', {
      padding: 1,
    })
  )
}

export { init }
