# express-spring application

## Run express-spring application
```bash
npm run startup
```

## Directory Structure
  ```bash
  project-root/
  ├── controllers/                # Folder including all Restful Controllers
  │   ├── ExampleController.ts    # Example of using express-spring decorators to implement Restful API
  │   ├── index.ts                # Index file to export all Restful Controllers
  ├── values/                     # Folder including JSON format data and extract them by "Value" decorator
  ├── application.config.json     # Configuration file for the application
  ├── main.ts                     # Main file to implement express-spring application
  ├── README.md                   # Project documentation
  └── package.json                # NPM dependencies and scripts
  └── tsconfig.json               # Typescript configuration file
  ```

## Application Configuration
  Entrie configuration can be modified in application.config.json (only "Port" can be changed in current version).

  ### Port
  Default value is 404, and the valid range is from 0 to 50,000 inclusive.

  ### ValuesFolder
  Default value is "values", to define the folder for storing JSON format data and extract them by "Value" decorator.


## Example of using express-spring decorators
  ### Example in [GitHub](https://github.com/George19890716/express-spring-example) 

  ### Implement an application:
  ```bash
  import { ExpressApplication } from 'express-spring';

  @ExpressApplication
  class Main {}
  ```
  ### Implement restful api:
  Implement rest api in url http://localhost:404/api/v1/example
  ```bash
  @RestController
  @RequestMapping('/')
  export class ExampleController {
    /* 
    * Restful api with GET method
    * URL: http://localhost:404/example
    * Response: { message: 'Here is the response of this Get Request!' }
    */
    @GetMapping('/example') 
    getExample() {
      return { message: 'Here is the response of this Get Request!' };
    }

    /* 
    * Restful api with POST method
    * URL: http://localhost:404/example
    * Response: { message: 'Here is the response of this Post Request!' }
    */
    @PostMapping('/example')
    postExample() {
      return { message: 'Here is the response of this Post Request!' };
    }

    /* 
    * Restful api with PUT method
    * URL: http://localhost:404/example
    * Response: { message: 'Here is the response of this Put Request!' }
    */
    @PutMapping('/example')
    putExample() {
      return { message: 'Here is the response of this Put Request!' };
    }

    /* 
    * Restful api with PATCH method
    * URL: http://localhost:404/example
    * Response: { message: 'Here is the response of this Patch Request!' }
    */
    @PatchMapping('/example')
    patchExample() {
      return { message: 'Here is the response of this Patch Request!' };
    }

    /* 
    * Restful api with DELETE method
    * URL: http://localhost:404/example
    * Response: { message: 'Here is the response of this Delete Request!' }
    */
    @DeleteMapping('/example')
    deleteExample() {
      return { message: 'Here is the response of this Delete Request!' };
    }
  }
  ```

  ### Using Parameter Decorators:
  @RequestBody: Extracts the entire HTTP request body (typically JSON) and binds it to method parameters
  ```bash
  @PostMapping('/parameter-body')
  getPayload(@RequestBody payload) {
    /* 
     * For the GET API http://localhost:404/parameter-body
     * Value of "payload" will be the Request Body in HTTP Request
     */
    return payload ?? {};
  }
  ```

  @RequestHeader: Extracts values from HTTP request headers and binds them to method parameters
  ```bash
  @GetMapping('/parameter-header')
  getHeader(
    @RequestHeader headers, 
    @RequestHeader('connection') connection,
  ) {
    /* 
     * For the GET API http://localhost:404/parameter-header
     * Value of "headers" will be whole Request Header in HTTP Request
     * Value of "connection" will be the attribute connection in Request Header
     */
    return { connection };
  }
  ```

  @RequestParam: Extracts query parameters from URL or form data and binds them to method parameters
  ```bash
  @GetMapping('/parameter-query')
  getQuery(
    @RequestParam queries, 
    @RequestParam('id') id,
  ) {
    /* 
     * For the GET API http://localhost:404/parameter-query?id=1&name=George
     * Value of "queries" will be { id: '1', name: 'George' }
     * Value of "id" will be '1'
     */
    return queries;
  } 
  ```

  @PathVariable: Extract values from URI template patterns defined with {variableName} placeholders.
  ```bash
  @DeleteMapping('/parameter/{id}')
  deleteParameter(@PathVariable('id') id) {
    /* 
     * For the DELETE API http://localhost:404/parameter/1
     * Value of "id" will be '1'
     */
    return { id };
  }
  ```

  ### Using Value Decorator:
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


