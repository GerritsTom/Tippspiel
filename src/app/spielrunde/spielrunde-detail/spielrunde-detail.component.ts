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
    private toastr: ToastrService) {
     }

  ngOnInit() {
    /*
    const resolvedData: Spiel[] | string = this.route.snapshot.data.spiele;
    if (Array.isArray(resolvedData)) {
      this.spiele = resolvedData;
    } else {
      this.error = resolvedData;
      this.toastr.error(this.error);
    } */


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

    /*
    this.route.params
    .subscribe((params: Params) => {
      this.id = params.id;

      this.spielrundeService.getSpiele(this.id).subscribe(
        (response: Spiel[]) => {
            this.spiele = response;
        });
    }); */
  }

  onTippen(spielId: number) {
    this.router.navigate(['spiel', +spielId, 'edit'], {relativeTo: this.route});
  }

}
