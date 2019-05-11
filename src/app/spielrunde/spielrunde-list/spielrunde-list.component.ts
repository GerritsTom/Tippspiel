import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SpielRundeService } from '../spielrunde.service';
import { SpielRunde } from '../spielrunde.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-spielrunde-list',
  templateUrl: './spielrunde-list.component.html',
  styleUrls: ['./spielrunde-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpielrundeListComponent implements OnInit {
  // spielRunde: SpielRunde[];
  error: string = null;


  spielrunde$: Observable<SpielRunde[]> = this.spielrundeService.spielrunde$
    .pipe(
      catchError(error => {
        this.error = error;
        this.toastr.error(this.error);
        return of(null);
      })
    );

  constructor(
    private spielrundeService: SpielRundeService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {}



  ngOnInit() {

    /*
    const resolvedData: SpielRunde[] | string = this.route.snapshot.data.spielRunde;
    if (Array.isArray(resolvedData)) {
        this.spielRunde = resolvedData;
      } else {
        this.error = resolvedData;
        this.toastr.error(this.error);
      }


      this.spielrundeService.getSpielRunde()
        .subscribe((response: SpielRunde[]) => {
          this.spielRunde = response;
        }); */

  }

}
