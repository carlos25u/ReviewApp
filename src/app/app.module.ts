import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ReviewsService } from './Services/reviews.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsDashboarComponent } from './Componentes/reviews-dashboar/reviews-dashboar.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsDashboarComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
    
  providers: [
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
