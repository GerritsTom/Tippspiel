import { Component, OnInit } from '@angular/core';
import { SpielRundeService } from '../spielrunde.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SpielRunde } from '../spielrunde.model';
import { Spiel } from '../spiel.model';
import { TippService } from 'src/app/tippen/tipp.service';
import { ToastrService } from 'ngx-toastr';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spielrunde-edit',
  templateUrl: './spielrunde-edit.component.html',
  styleUrls: ['./spielrunde-edit.component.css']
})
export class SpielrundeEditComponent implements OnInit, CanComponentDeactivate {
  spielId: number;
  spielrundeId: number;
  spiel: Spiel;
  tippForm: FormGroup;
  scoreTeam1: any;
  scoreTeam2: any;

  constructor(
      private spielrundeService: SpielRundeService,
      private route: ActivatedRoute,
      private router: Router,
      private tippService: TippService,
      private toastr: ToastrService) { }

  ngOnInit() {

    this.spielrundeService.fetchedSpiel$.subscribe(value => {
      this.spiel = value;
    });

    this.route.params.subscribe((params: Params) => {
      this.spielId = +params.spielId;
      this.spielrundeId = params.id;
    });

    this.initForm();
  }

  initForm() {
    this.tippForm = new FormGroup({
      scoreTeam1: new FormControl(this.scoreTeam1, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      scoreTeam2: new FormControl(this.scoreTeam2, Validators.required)
    });

    this.tippForm.setValue({
      scoreTeam1: 0,
      scoreTeam2: 0
    });
  }


  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.scoreTeam1 !== this.tippForm.value.scoreTeam1) {
      return confirm('Möchte Sie diese Seite verlassen?');
    } else {
      return true;
    }
  }

  onBack() {
    this.router.navigate(['/spielrunde', this.spielrundeId]);
  }

  onTippen() {
    this.tippService.addTipp(this.tippForm.value.scoreTeam1, this.tippForm.value.scoreTeam2, this.spiel.id)
      .subscribe(
        response => {
          if (!response) {
          this.toastr.error('Error occured!');
        } else {
          // this.toastr.success('Tipp Spiel ' + response.responseData.spiel.team1 + ' ' + response.responseData.spiel.team2 + ' gespiechert');
          this.toastr.success('Tipp gespiechert');

          // Tipp aus response object speichern in Subject....
          this.router.navigate(['/spielrunde', this.spielrundeId]);
        }
      }, error => {
        this.toastr.error(error);
      });
  }

}
