import { Injectable } from '@angular/core';

// 匯入撈資料所需
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import * as models from './models';

// 轉 json 所需 header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// 來源網址
// const apiUrl = 'http://api.btstu.cn/sjbz/?lx=dongman';

@Injectable({
  providedIn: 'root'
})
export class ServicePhotoAPIService {

  constructor(
    private http: HttpClient
  ) { }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getImage(imageUrl: string): Observable<Blob> {
  //   return this.http.get(imageUrl, { responseType: 'blob' });
  // }

  // getPhotos(): Observable<models.Character[]> {
  //   return this.http.get<models.Character[]>(apiUrl)
  //     .pipe(
  //       tap(Post => console.log('fetched Posts')),
  //       catchError(this.handleError('getPosts', []))
  //     );
  // }

  // getPost(id: number): Observable<models.Character> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<models.Character>(url).pipe(
  //     tap(_ => console.log(`fetched Post id=${id}`)),
  //     catchError(this.handleError<models.Character>(`getPost id=${id}`))
  //   );
  // }

  // addPost(Character: models.Character): Observable<models.Character> {
  //   return this.http.post<models.Character>(apiUrl, Character, httpOptions).pipe(
  //     tap((character: models.Character) => console.log(`added Post w/ id=${Character.characterId}`)),
  //     catchError(this.handleError<models.Character>('addPost'))
  //   );
  // }

  // updatePost(id: any, Character: models.Character): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, Character, httpOptions).pipe(
  //     tap(_ => console.log(`updated Post id=${id}`)),
  //     catchError(this.handleError<any>('updatePost'))
  //   );
  // }

  // deletePost(id: any): Observable<models.Character> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.delete<models.Character>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted Post id=${id}`)),
  //     catchError(this.handleError<models.Character>('deletePost'))
  //   );
  // }
}
