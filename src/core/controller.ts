import { checkInProject, checkControllerExist, generateController } from '../utils/index.js';

const action = async (name: string) => {
  const projectPath = process.cwd();
  if (checkInProject(projectPath, name) && !checkControllerExist(projectPath, name)) {
    generateController(projectPath, name);
  }
}

export default {
  action,
  command: 'controller <controller-name>',
  description: 'Generate a restful controller in express-spring application',
}