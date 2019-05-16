import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpielRundeService } from './spielrunde/spielrunde.service';
import { TippenComponent } from './tippen/tippen.component';
import { TippService } from './tippen/tipp.service';
import { ToastrModule } from 'ngx-toastr';
import { SpielResolver } from './spielrunde/spiel-resolver.service';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SpielRundeService, TippService, SpielResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
