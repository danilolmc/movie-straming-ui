import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieModalComponent } from './movie-modal.component'
import { SafePipe } from 'src/app/core/pipes/safe.pipe';

@NgModule({

  declarations: [MovieModalComponent,SafePipe],
  exports: [MovieModalComponent],
  imports: [CommonModule]

})
export class MovieModalModule { }
