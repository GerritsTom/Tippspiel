import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tipp } from './tipp.model';

@Injectable({
  providedIn: 'root'
})
export class TippService {
  private baseUrl = 'http://localhost:3000/api';
  private tipps: Tipp[];
  public tippSubject: BehaviorSubject<Tipp>;

  constructor(private http: HttpClient) {
    this.tippSubject = new BehaviorSubject<Tipp>(null);
  }

  addTipp(scoreTeam1: number, scoreTeam2: number, spielId: string) {
    const url = `${this.baseUrl}/`;
    const postData = {
      scoreTeam1,
      scoreTeam2,
      createdAt: new Date(),
      changedAt: new Date(),
      user: '5ccc8bde96af1143dcc21a66',
      spiel: spielId
    };
    return this.http.post<{message: string, tipp: any}>(url + 'tipps/', postData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      console.log('Server Side Error: ', errorResponse);
    }
    // tslint:disable-next-line: max-line-length
    return throwError('Tipp nicht gespeichert!. \nTechnische Fehler aufgetreten.');
  }
}
