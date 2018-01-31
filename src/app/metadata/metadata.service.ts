import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Metadata, MetadataResultSet } from './metadata.model';

@Injectable()
export class MetadataService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<MetadataResultSet> {
    return this.httpClient
        .get<MetadataResultSet>(`${environment.api_url}/metadata/groups`, { 
          headers: new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
         })
        .pipe(catchError(this.handleError)
      );
  }

  getMetadata(url: string): Observable<Metadata> {
    return this.httpClient
      .get<MetadataResultSet>(url, { 
        headers: new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
       })
       .pipe(
          catchError(this.handleError)
      );
  }

  createMetadata(url: string, metadata: Metadata) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'appplication/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      )
    }
    return this.httpClient.post(url, JSON.stringify(metadata), httpOptions);
  }

  updateMetadata(url: string, metadata: Metadata) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'appplication/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      )
    }
    return this.httpClient.patch(url, JSON.stringify(metadata), httpOptions);
  }

  deleteMetadata(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'appplication/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      )
    }
    return this.httpClient.delete(url, httpOptions);
  } 


  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}