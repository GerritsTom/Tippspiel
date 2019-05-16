import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpielrundeComponent } from './spielrunde.component';
import { SpielrundeDetailComponent } from './spielrunde-detail/spielrunde-detail.component';
import { SpielrundeEditComponent } from './spielrunde-edit/spielrunde-edit.component';
import { SpielResolver } from './spiel-resolver.service';

const spielRundeRoutes: Routes = [{
  path: '',
  component: SpielrundeComponent,
  children: [
              {
                path: ':id',
                component: SpielrundeDetailComponent,
                resolve: {spiele: SpielResolver}
              },
              {
                path: ':id/spiel/:spielId/edit',
                component: SpielrundeEditComponent
              }
            ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(spielRundeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SpielRundeRoutingModule {

}
