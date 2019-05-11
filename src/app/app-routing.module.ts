import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpielrundeComponent } from './spielrunde/spielrunde.component';
import { SpielrundeDetailComponent } from './spielrunde/spielrunde-detail/spielrunde-detail.component';
import { SpielrundeEditComponent } from './spielrunde/spielrunde-edit/spielrunde-edit.component';
import { SpielResolver } from './spielrunde/spiel-resolver.service';
import { SpielRundeResolver } from './spielrunde/spielrunde-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'},
  {
    path: 'spielrunde',
    component: SpielrundeComponent,
    resolve: {spielRunde: SpielRundeResolver},
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
  },
  {path: 'signup', component: HomeComponent},
  {path: 'login', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
