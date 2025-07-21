# [express-spring](https://www.npmjs.com/package/express-spring) application generator

  The quickest way to get started express application with express-spring decorators.

## Installation 

  This is a generator based on Node.js.

  Before installing, download and install Node.js. Node.js 18 or higher is required.

  ```bash
  npm install -g express-spring-generator
  ```

## Quick Start

  Create the app:
  ```bash
  express-spring new example
  ```

  Input the number of port or using default value (Supported in version 1.1.0 of generator):
  ```bash
  ? Please input port of the application (404)
  ```

  Start application at http://localhost:404/:
  ```bash
  npm run startup
  ```

## Commands and Options
  Commands:
  ```bash
  controller <controller-name>    Generate a restful controller in express-spring application
  new [options] <project-name>    Create a new express-spring application
  ```
  Options:
  ```bash
  -v, --version        output the version number
  -h, --help           display help for command
  -f, --force          Overwrites existing directory without confirmation when creating new project
  ```

  ## Change log
  In [express-spring](https://www.npmjs.com/package/express-spring) 1.3.0

  ### "Value" decorator will be supported.

  JSON file in "values/example/message.json"
  ```bash
  {
    "value": "This is an example of using Value decorator!"
  }
  ```

  Extract data from "values/example/message.json" in Rest Controller
  ```bash
  @RestController
  export class ValueController {
    @Value('example.message.value')
    private value: string; 

    @GetMapping('/value')
    getValue() {
      // "this.value" will be "This is an example of using Value decorator!"
      return this.value;
    }
  }
  ```

  ### "ValuesFolder" can be set in application.config.json 
  Default value is "values", to define the folder for storing JSON format data and extract them by "Value" decorator.

## Developers
  The original author of Express Spring Generator is [Xu Ming](https://github.com/George19890716)

  List of all contributors
  * [Li Songjing](https://github.com/lisongjing)
  * [Yi Xuelian](https://github.com/June-elisa)

## License

  [MIT](LICENSE)