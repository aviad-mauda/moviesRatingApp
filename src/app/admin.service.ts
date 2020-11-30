import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  baseURL: string = "http://localhost:3000";
  movie = new Object();

  constructor(private http: HttpClient) { }

  submit(name : string, imdb : string, rating : number) {
    this.movie = {
      name,
      imdb,
      rating
    }

    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(this.movie);
    return this.http.post(this.baseURL + "/addMovie", body, {'headers':headers})
    .subscribe(res => {
      console.log(res);
   })
    
  }
}
