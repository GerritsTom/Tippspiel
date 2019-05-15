import { NgModule } from '@angular/core';
import { SpielrundeComponent } from './spielrunde.component';
import { SpielrundeListComponent } from './spielrunde-list/spielrunde-list.component';
import { SpielrundeDetailComponent } from './spielrunde-detail/spielrunde-detail.component';
import { SpielrundeEditComponent } from './spielrunde-edit/spielrunde-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpielRundeRoutingModule } from './spielrunde-routing.module';

@NgModule({
  declarations: [
    SpielrundeComponent,
    SpielrundeListComponent,
    SpielrundeDetailComponent,
    SpielrundeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpielRundeRoutingModule
  ]
})
export class SpielRundeModule {}
