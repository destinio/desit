import { bold } from 'chalk'
import { Command } from 'commander'

const { log } = console

/**
 * Main init function
 */
function init(config: any) {
  const program = new Command()
  const { version, description } = config

  program.version(version).description(description)
  program.option('-s, --start', 'start app')
  program.parse()

  const { start } = program.opts()

  start && log('START')

  log(bold.hex('#000').bgBlueBright(' App has started '))
}

export { init }
