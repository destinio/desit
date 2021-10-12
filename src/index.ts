import chalk from 'chalk'
import { Command } from 'commander'
import meow from 'meow'

const { log } = console

const cli = meow(
  `
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`,
  {
    importMeta: import.meta,
    flags: {
      rainbow: {
        type: 'boolean',
        alias: 'r',
      },
    },
  }
)

/**
 * Main init function
 */
function init() {
  const program = new Command()

  program.version('0.2.0').description('The desit toolset')
  program.option('-s, --start', 'start app')
  program.parse()

  const { start } = program.opts()

  start && log('START')

  log(chalk.bold.hex('#000').bgBlueBright(' App has started '))
}

export { init }
