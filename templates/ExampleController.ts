import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  PostMapping,
  PutMapping,
  PatchMapping,
  DeleteMapping
} from 'express-spring';

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
    return { message: 'Here is the response of this Patch Request!' };
  }

  @DeleteMapping('/example')
  deleteExample() {
    return { message: 'Here is the response of this Delete Request!' };
  }
}