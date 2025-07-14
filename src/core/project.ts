import fse from 'fs-extra';
import path from 'path';
import { checkProjectExist, generateProject } from '../utils';

const action = async (projectName: string, option: any) => {
  const targetPath = path.join(process.cwd(), projectName);
  if (option.force) {
    await fse.rmove(targetPath);
  }
  if (!await checkProjectExist(targetPath, projectName)) {
    generateProject(targetPath, projectName);
  }
}

export default {
  action,
  command: 'new <project-name>',
  description: 'Create a new express-spring project',
  option: '-f, --force',
  optionDescription: 'overwrite the existed project'
}