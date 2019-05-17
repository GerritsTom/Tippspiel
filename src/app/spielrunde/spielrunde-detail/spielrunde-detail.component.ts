import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { SpielRundeService } from '../spielrunde.service';
import { Spiel } from '../spiel.model';
import { SpielRunde } from '../spielrunde.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-spielrunde-detail',
  templateUrl: './spielrunde-detail.component.html',
  styleUrls: ['./spielrunde-detail.component.css']
})
export class SpielrundeDetailComponent implements OnInit {
  id: string;
  spiele: Spiel[];
  error: string = null;

  constructor(
    private spielrundeService: SpielRundeService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit() {
    // use a resolver
    this.route.data.subscribe(
      (data: Data) => {
        if (Array.isArray(data.spiele)) {
          this.spiele = data.spiele;
        } else {
          this.error = data.spiele;
          this.toastr.error(this.error);
        }
    });
  }

  onTippen(spiel: Spiel) {
    this.spielrundeService.fetchedSpielSubject.next(spiel);
    this.router.navigate(['spiel', +spiel.spielId, 'edit'], {relativeTo: this.route});
  }

}
