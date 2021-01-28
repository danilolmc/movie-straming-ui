import { NgModule } from '@angular/core';
import { MoviesCarrouselComponent } from './movies-carrousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MoviesCarrouselComponent],
  exports: [MoviesCarrouselComponent],
  imports: [CommonModule]
})
export class CarrouselMoviesModule{}
