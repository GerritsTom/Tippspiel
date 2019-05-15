import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SpielRundeService } from './spielrunde/spielrunde.service';
import { TippenComponent } from './tippen/tippen.component';
import { TippService } from './tippen/tipp.service';
import { ToastrModule } from 'ngx-toastr';
import { SpielResolver } from './spielrunde/spiel-resolver.service';
import { SpielRundeResolver } from './spielrunde/spielrunde-resolver.service';
import { SpielRundeModule } from './spielrunde/spielrunde.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TippenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SpielRundeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SpielRundeService, TippService, SpielResolver, SpielRundeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
