import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SpielResolver } from '../spielrunde/spiel-resolver.service';
import { SpielRundeService } from '../spielrunde/spielrunde.service';
import { TippService } from '../tippen/tipp.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    SpielRundeService,
    TippService,
    SpielResolver
  ]
})
export class CoreModule {
}
