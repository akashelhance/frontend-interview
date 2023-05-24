import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  // CRUD Methods for consuming RESTful API

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch employees list
  getUsers(): Observable<User> {
    return this.http
      .get<User>(this.apiURL + '/user')
      .pipe(retry(1), catchError(this.handleError));
  }


   // HttpClient API post() method => Create employee
   createUser(user: any): Observable<User> {
    return this.http
      .post<User>(
        this.apiURL + '/createuser',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


    // HttpClient API put() method => Update employee
    updateUser(id: any, user: any): Observable<User> {
      return this.http
        .put<User>(
          this.apiURL + '/user/' + id,
          JSON.stringify(user),
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    }


  // HttpClient API get() method => Fetch employee
  getUser(id: any): Observable<User> {
    return this.http
      .get<User>(this.apiURL + '/user/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }


   // HttpClient API delete() method => Delete employee
   deleteUser(id: any) {
    return this.http
      .delete<User>(this.apiURL + '/user/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
