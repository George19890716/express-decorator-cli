import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  PostMapping,
  PutMapping,
  PatchMapping,
  DeleteMapping
} from 'express-spring';

/*
 * Tips: using parameter decorators to simplify the implementation api
 * RequestBody: get payload of post / put / patch http request
 *   example: 
 *     postExample(@RequestBody payload) {...}  // payload will be the body of post request
 * RequestHeader: get entire request header or one single attribute from request header
 *   example:
 *     getExample(
 *       @RequestHeader header,       // get entire request header
 *       @RequestHeader('connection') // get attribute 'connection' from request header
 *     )      
 * RequestParam: get entire query params or specific query parameter
 *   example with queries "?id=1&name=n":
 *   getExample(
 *     @RequestParam queries,   // get entire query params of http request{ id: 1, name: 'n' }
 *     @RequestParam('id') id   // get id from query params only
 *   )  
 */

@RestController
@RequestMapping('/')
export class ExampleController {
  @GetMapping('/example')
  getExample() {
    return { message: 'Here is the response of this Get Request!' };
  }

  @PostMapping('/example')
  postExample() {
    return { message: 'Here is the response of this Post Request!' };
  }

  @PutMapping('/example')
  putExample() {
    return { message: 'Here is the response of this Put Request!' };
  }

  @PatchMapping('/example')
  patchExample() {
    return 'Here is the response of this Patch Request!';
  }

  @DeleteMapping('/example')
  deleteExample() {
    return 'Here is the response of this Delete Request!';
  }
}