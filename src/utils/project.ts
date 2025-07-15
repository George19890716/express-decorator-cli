import chalk from 'chalk';
import { execa } from 'execa';
import fse from 'fs-extra';
import inquirer from 'inquirer';
import ora from 'ora';
import path from 'path';
import { getPacckageJsonPath } from './common.js';
 
export const checkProjectExist = async (targetPath: string, projectName: string) => {
  if (fse.existsSync(targetPath)) {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'overwrite',
      message: `There is an existed folder ${projectName} in target directory. Do u want to overwrite it?`,
      choices: ['Y', 'N'],
    });
    if (answer.overwrite === 'Y') {
        fse.removeSync(targetPath);
        console.log(chalk.green(`Folder ${projectName} has been removed!`));
    } else {
        console.log(chalk.red(`Warning: Project ${projectName} creation has been cancelled!`));
    }
    return answer.overwrite === 'N';
  }
  return false;
}

export const generateProject = async (targetPath: string, projectName: string) => {
  try {
    const spinner = ora(`Creating new project ${projectName}...`).start();

    const templatePath = path.join(__dirname, '..', 'templates', 'project');
    fse.copySync(templatePath, targetPath);

    // Update name in package.json
    updatePackageJson(targetPath, projectName);

    console.log('\n');
    generateProjectInfo(projectName);
    console.log('\n');

    spinner.succeed(chalk.green(`Creating new project ${projectName} completed!`));

    console.log('\n');
    spinner.start('npm installing...');
    console.log('\n');
    const { stdout, stderr } = await execa({ cwd: targetPath })`npm install`;
    if (stderr) {
      spinner.fail(chalk.red('npm install failed!'));
      console.log('\n');
      throw stderr;
    }

    console.log(stdout);
    console.log('\n');
    spinner.succeed(chalk.green('npm install completed!'));
  } catch (e) {
    console.error(chalk.red(`Error: ${e?.message ?? e}`));
    console.error(chalk.red('Error: Failed to create new project!'));
  }
}

export const updatePackageJson = (targetPath: string, projectName: string) => {
  const pacckageJsonPath = getPacckageJsonPath(targetPath);
  const packageData = fse.readFileSync(pacckageJsonPath, 'utf8');
  fse.writeFileSync(
    pacckageJsonPath, 
    packageData.replace(/express-spring-template/, `${projectName}`), 
    'utf8',
  );
}

export const generateProjectInfo = (projectName: string) => {
  console.log(chalk.green('Create'), `${projectName}/controllers/index.ts`);
  console.log(chalk.green('Create'), `${projectName}/controllers/example-controller.ts`);
  console.log(chalk.green('Create'), `${projectName}/main.ts`);
  console.log(chalk.green('Create'), `${projectName}/package.json`);
  console.log(chalk.green('Create'), `${projectName}/Readne.md`);
  console.log(chalk.green('Create'), `${projectName}/tsconfig.json`);
};