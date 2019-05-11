import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SpielrundeComponent } from './spielrunde/spielrunde.component';
import { SpielrundeListComponent } from './spielrunde/spielrunde-list/spielrunde-list.component';
import { SpielRundeService } from './spielrunde/spielrunde.service';
import { SpielrundeDetailComponent } from './spielrunde/spielrunde-detail/spielrunde-detail.component';
import { SpielrundeEditComponent } from './spielrunde/spielrunde-edit/spielrunde-edit.component';
import { TippenComponent } from './tippen/tippen.component';
import { TippService } from './tippen/tipp.service';
import {
  ToastrModule
} from 'ngx-toastr';
import { SpielResolver } from './spielrunde/spiel-resolver.service';
import { SpielRundeResolver } from './spielrunde/spielrunde-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SpielrundeComponent,
    SpielrundeListComponent,
    SpielrundeDetailComponent,
    SpielrundeEditComponent,
    TippenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SpielRundeService, TippService, SpielResolver, SpielRundeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
