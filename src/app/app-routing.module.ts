import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SpielResolver } from './spielrunde/spiel-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'spielrunde', loadChildren: './spielrunde/spielrunde.module#SpielRundeModule' },
  { path: 'signup', component: HomeComponent },
  { path: 'login', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
