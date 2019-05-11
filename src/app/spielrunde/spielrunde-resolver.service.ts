import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Spiel } from './spiel.model';
import { SpielRundeService } from './spielrunde.service';
import { SpielRunde } from './spielrunde.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SpielRundeResolver implements Resolve<SpielRunde[] | string> {

  constructor(private spielrundeService: SpielRundeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpielRunde[] | string> {
    return this.spielrundeService.getSpielRunde()
      .pipe(
        catchError((err: string) => of(err))
      );
  }
}
