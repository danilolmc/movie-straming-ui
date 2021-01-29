import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movies.service';
import { CarrouselMoviesModule } from './components/movies-carrousel/carrousel-movies.module';
import { MovieInformationModule } from './components/movie-informations/movie-informations.module';
import { HeaderModule } from './components/header/header.module';
import { MovieModalModule } from './components/movie-modal/movie-modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderModule,
    CarrouselMoviesModule,
    MovieInformationModule,
    MovieModalModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
