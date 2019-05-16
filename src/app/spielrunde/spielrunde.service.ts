import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SpielRunde } from './spielrunde.model';
import { Spiel } from './spiel.model';
import { map, catchError } from 'rxjs/operators';
import { observable, throwError, Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class SpielRundeService {
  private baseUrl = 'http://localhost:3000/api';
  private url = `${this.baseUrl}/`;

  public fetchedSpielSubject: BehaviorSubject<Spiel>;
  public fetchedSpiel$: Observable<Spiel>;

  spielrunde$ = this.httpClient.get<SpielRunde[]>(this.url + 'spielrunden')
  .pipe(
    catchError(this.handleError)
  );

  constructor(private httpClient: HttpClient) {
    this.fetchedSpielSubject = new BehaviorSubject<Spiel>(null);
    this.fetchedSpiel$ = this.fetchedSpielSubject.asObservable();
  }

  /*
  *
  */
  getSpiele(spielrundeId: string) {
    const url = `${this.baseUrl}/`;
    return this.httpClient.get<SpielRunde>(url + 'spielrunden/' + spielrundeId)
      .pipe(
        catchError(this.handleError),
        map((data) => {
          return data.spiele.map(spiel => {
            return {
              spielId: spiel.spielId,
              datum: spiel.datum,
              gruppe: spiel.gruppe,
              stadion: spiel.stadion,
              ort: spiel.ort,
              team1: spiel.team1,
              team2: spiel.team2,
              scoreTeam1: spiel.scoreTeam1,
              scoreTeam2: spiel.scoreTeam2,
              spielRunde: spiel.spielRunde,
              id: spiel._id,
            };
          }
        );
      })
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // clientside
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      // Serverside
      console.log('Server Side Error: ', errorResponse);
    }
    // tslint:disable-next-line: max-line-length
    return throwError('Die Anfrage kann nicht beantwortet werden, da im Server ein interner Fehler aufgetreten ist. \nVersuche Sie es später noch einmal.');
  }
}

  /*
  */
 /*
  getSpiel(spielId: string) {
    const url = `${this.baseUrl}/`;
    return this.httpClient.get<{message: string; spiel: any}>(url + 'spiele/' + spielId)
      .pipe(
        map(response => {
          this.fetchedSpielSubject.next(
            {
              spielId: response.spiel.spielId,
              datum: response.spiel.datum,
              gruppe: response.spiel.gruppe,
              stadion: response.spiel.stadion,
              ort: response.spiel.ort,
              team1: response.spiel.team1,
              team2: response.spiel.team2,
              scoreTeam1: response.spiel.scoreTeam1,
              scoreTeam2: response.spiel.scoreTeam2,
              spielRunde: response.spiel.spielRunde,
              id: response.spiel._id
            });
        })
      );
  }*/

  /*
  */
 /*
  getSpielRunde(): Observable<SpielRunde[]> {
    return this.httpClient.get<SpielRunde[]>(this.url + 'spielrunden')
      .pipe(
        catchError(this.handleError)
      );
  } */
