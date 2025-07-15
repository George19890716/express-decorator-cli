import { program } from 'commander';
import fse from 'fs-extra';
import path from 'path';
import { controllerCommand, projectCommand } from './core/index.js';

const startup = async () => {
  // Add 'controller' command for express spring cli
  program
    .command(controllerCommand.command)
    .description(controllerCommand.description)
    .action(controllerCommand.action);

  // Add 'new' command for express spring cli
  program
    .command(projectCommand.command)
    .description(projectCommand.description)
    .action(projectCommand.action)
    .option(projectCommand.option, projectCommand.optionDescription);

  // Add 'version' command for express spring cli
  const packageData = await fse.readFile(path.join(__dirname, '..', 'package.json'), 'utf8');
  program.version(JSON.parse(packageData).version, '-v, --version');

  program.parse(process.argv);
}

startup();