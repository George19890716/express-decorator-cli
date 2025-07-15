import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  PostMapping,
  PutMapping,
  PatchMapping,
  DeleteMapping
} from 'express-spring';

// Examples of implement Restful API with url http://localhost:404/example

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