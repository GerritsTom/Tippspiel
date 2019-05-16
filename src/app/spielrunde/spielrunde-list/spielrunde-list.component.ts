import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SpielRundeService } from '../spielrunde.service';
import { SpielRunde } from '../spielrunde.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-spielrunde-list',
  templateUrl: './spielrunde-list.component.html',
  styleUrls: ['./spielrunde-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpielrundeListComponent {
  error: string = null;

  spielrunde$: Observable<SpielRunde[]> = this.spielrundeService.spielrunde$
    .pipe(
      tap(() => {console.log('using rxjs to load the data'); }),
      catchError(error => {
        this.error = error;
        this.toastr.error('Fehlermeldung', this.error);
        return of(null);
      })
    );

  constructor(
    private spielrundeService: SpielRundeService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {}
}
