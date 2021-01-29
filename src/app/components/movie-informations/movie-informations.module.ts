import { NgModule } from '@angular/core';
import { MovieInformationsComponent } from './movie-informations.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MovieInformationsComponent],
  exports: [MovieInformationsComponent],
  imports: [CommonModule, BrowserAnimationsModule, FontAwesomeModule]
})
export class MovieInformationModule { }
