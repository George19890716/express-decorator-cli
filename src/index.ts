import { program } from 'commander';
import fse from 'fs-extra';
import path from 'path';

const startup = async () => {
  // Add version command for express spring cli
  const packageData = await fse.readFile(path.join(__dirname, '..', 'package.json'), 'utf8');
  program.version(JSON.parse(packageData).version, '-v, --version');

  program.parse(process.argv);
}

startup();