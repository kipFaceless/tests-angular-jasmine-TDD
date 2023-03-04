import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TodosService', () => {
  let service: TodosService;
  let http : HttpClient
 /* const httpStub =  {
    get:(_params :any) => of( [
      {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
      },])
  }
  */

  beforeEach(() => {
    TestBed.configureTestingModule({
    /*  providers: [
        {
          provide : HttpClient,
          useValue : httpStub
        }
      ],  */
      imports: [
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(TodosService);
    http = TestBed.inject(HttpClient)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Should call with right endpoint", ()=>{
    const spy = spyOn(http, 'get').and.callThrough();
    service.getTodos();
    //expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')
  })
});
