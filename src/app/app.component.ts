import { Component } from '@angular/core';
import { Movie } from './core/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-streaming-ui';

  selectedMovie !: Movie;

  mostrarDados(movie :  Movie){
    this.selectedMovie = movie
  }
}
