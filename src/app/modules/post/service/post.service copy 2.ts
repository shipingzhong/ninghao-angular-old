import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  postApi = 'http://localhost:3000/posts';

  constructor(private http:HttpClient) {
  }
  index(){
    return this.http.get(this.postApi).pipe(
      catchError(this.handleError),
      retry(3)
      );
  }
  show(id:number){
    return this.http.get<Post>(`${this.postApi}/${id}`);
  }

  handleError(error:HttpErrorResponse){
    console.log("error occurred");
    return throwError('Something went wrong');
  }
}
