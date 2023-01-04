import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './interface/employee';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class ViewtestService {

  data1:any;
  constructor(private http:HttpClient) { }

  getViewTest():Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>('https://exceptionalpanaceasolutions.000webhostapp.com/view.php')
   .pipe(
    catchError(this.handleError)
  );
   //.catch(this.errorHandler);
   // console.log(this.data1);
    
  }

  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message || 'Server Error');
    
  // }

  private handleError(error: HttpErrorResponse) {
    let errormsg="";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
       `Backend returned code ${error.status}, body was: `, error.error);
       errormsg=`Backend returned code ${error.status}, body was: `, error.error;

    }
    // Return an observable with a user-facing error message.
    errormsg+='Something bad happened; please try again later.'
    return throwError(() => new Error(errormsg));
  }
}
