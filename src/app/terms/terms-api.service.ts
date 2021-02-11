import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {catchError} from 'rxjs/operators';/
import {API_URL} from '../env';
import {Term} from './term.model';

@Injectable()
export class TermsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getTerms(): Observable<Term[]> {
    return this.http
      .get<Term[]>(`${API_URL}/terms`)
    //   .catch(TermsApiService._handleError);
  }
}