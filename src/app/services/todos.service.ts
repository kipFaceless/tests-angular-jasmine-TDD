import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnInit{

  todos$ : Observable<any> = new Observable<any>();
  constructor(private http : HttpClient) {

  }
  readonly BASE_URL = "https://jsonplaceholder.typicode.com/todos"

  ngOnInit(): void {

  }

  getTodos(){

      this.http.get(this.BASE_URL).subscribe(data => {
        console.log(data);
      });

  }
}
