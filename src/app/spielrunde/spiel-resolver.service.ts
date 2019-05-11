import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Spiel } from './spiel.model';
import { SpielRundeService } from './spielrunde.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SpielResolver implements Resolve<Spiel[] | string> {

  constructor(private spielrundeService: SpielRundeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Spiel[] | string> {
    return this.spielrundeService.getSpiele(route.params.id)
    .pipe(
      catchError((err: string) => of(err))
    );
  }
}
