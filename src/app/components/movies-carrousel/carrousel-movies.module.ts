import { NgModule } from '@angular/core';
import { MoviesCarrouselComponent } from './movies-carrousel.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IdInputPipe } from 'src/app/core/pipes/id-input.pipe';

@NgModule({
  declarations: [MoviesCarrouselComponent, IdInputPipe],
  exports: [MoviesCarrouselComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class CarrouselMoviesModule { }
