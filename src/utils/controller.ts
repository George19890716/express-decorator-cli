import chalk from 'chalk';
import fse from 'fs-extra';
import path from 'path';
import { getPacckageJsonPath } from './common.js';

export const getControllerName = (name: string) => {
  if (!name) return { fileName: 'Controller.ts', controllerName: '' };
  let controllerName = '';
  if (name.toLowerCase().endsWith('controller')) {
    controllerName = (name[0].toUpperCase() + name.slice(1)).substring(0, name.length - 10);
  } else {
    controllerName = name[0].toUpperCase() + name.slice(1);
  }
  return { controllerName, fileName: `${controllerName}Controller.ts` }; 
}

export const getControllerIndexPath = (projectPath: string) => {
  return path.join(projectPath, 'controllers', 'index.ts');
}

export const getControllerPath = (projectPath: string, fileName: string) => {
  return path.join(projectPath, 'controllers', fileName);
}

export const checkInProject = (projectPath: string, name: string) => {
  const controllerIndexPath = getControllerIndexPath(projectPath);
  const pacckageJsonPath = getPacckageJsonPath(projectPath);
  if (fse.existsSync(controllerIndexPath) && fse.existsSync(pacckageJsonPath)) {
    return true;
  }
  const { controllerName } = getControllerName(name);
  console.error(chalk.red(`Failed to generate ${controllerName} controller, please ensure you are in express-spring project directory!`));
  return false;
}

export const checkControllerExist = (projectPath: string, name: string) => {
  const { controllerName, fileName } = getControllerName(name);
  const controllerPath = getControllerPath(projectPath, fileName);
  if (fse.existsSync(controllerPath)) {
    console.error(chalk.red(`Failed to generate ${controllerName} controller, it is already existed!`));
    return true;
  }
  return false;
}

export const generateController = async (projectPath: string, name: string) => {
  try {
    const { controllerName, fileName } = getControllerName(name);

    const controllerIndexPath = getControllerIndexPath(projectPath);
    const controllerPath = getControllerPath(projectPath, fileName);
    const templatePath = path.join(__dirname, '..', 'templates', 'ExampleController.ts');

    const controllerData = fse.readFileSync(templatePath, 'utf8');
    fse.writeFileSync(
      controllerPath, 
      controllerData.replace(/Example/g, `${controllerName}`).replace(/example/g, controllerName.toLowerCase()),
      'utf8',
    );

    const controllerIndexData = fse.readFileSync(controllerIndexPath, 'utf8');
    fse.writeFileSync(controllerIndexPath, 
      `${controllerIndexData}\nexport * from './${controllerName}Controller';`,
      'utf8',
    );

    console.log(chalk.green(`Generate ${controllerName} controller successfully!`));
  } catch (e) {
    console.error(chalk.red(`Error: ${e?.message ?? e}`));
    console.error(chalk.red('Error: Failed to generate the controller!'));
  }
}