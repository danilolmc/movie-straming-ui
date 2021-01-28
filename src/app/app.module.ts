import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesCarrouselComponent } from './components/movies-carrousel/movies-carrousel.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { MovieService } from './services/movies.service';
import { MovieInformationsComponent } from './components/movie-informations/movie-informations.component';
import { CarrouselMoviesModule } from './components/movies-carrousel/carrousel-movies.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieInformationsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CommonModule,
    CarrouselMoviesModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
