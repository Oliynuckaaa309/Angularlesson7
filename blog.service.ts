import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog, IBlog1, IBlog2 } from './blog.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  
public api={
  posts:'http://localhost:3000/posts',
 
}
  constructor(private http:HttpClient) { }
  getAll():Observable<IBlog[]>{
   return this.http.get<IBlog[]>(this.api.posts)
  }
  create(post:IBlog2):Observable<IBlog>{
    return this.http.post<IBlog>(this.api.posts, post)
  }
  edit(post:IBlog2, id:number){
    return this.http.patch<IBlog2[]>(`${this.api.posts}/${id}`, post);

  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api.posts}/${id}`);
  }
}
