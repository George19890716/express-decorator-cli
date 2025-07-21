import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  PostMapping,
  Value,
} from 'express-spring';

// Examples of implement Restful API with url http://localhost:404/example

@RestController
@RequestMapping('/')
export class ExampleController {
  @Value('example.message')
  private message: any;  // Using Value decorator to extract the data

  /* 
   * Restful api with GET method
   * URL: http://localhost:404/example
   * Response: { "value": "This is an example of using Value decorator!" }
   */
  @GetMapping('/example') 
  getExample() {
    return this.message;
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
}