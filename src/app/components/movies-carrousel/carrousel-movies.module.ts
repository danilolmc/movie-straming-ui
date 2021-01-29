import { NgModule } from '@angular/core';
import { MoviesCarrouselComponent } from './movies-carrousel.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MoviesCarrouselComponent],
  exports: [MoviesCarrouselComponent],
  imports: [CommonModule,FontAwesomeModule]
})
export class CarrouselMoviesModule{}
