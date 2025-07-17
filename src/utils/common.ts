import path from 'path';

export const getPacckageJsonPath = (projectPath: string) => {
  return path.join(projectPath, 'package.json');
}

export const getConfigurationPath = (projectPath: string) => {
  return path.join(projectPath, 'application.config.json');
}