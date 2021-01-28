import { Component, OnInit, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/Movie';

@Component({
  selector: 'app-movies-carrousel',
  templateUrl: './movies-carrousel.component.html',
  styleUrls: ['./movies-carrousel.component.css']
})
export class MoviesCarrouselComponent implements OnInit {

  movies$ ?: Observable<Movie[]>;

  @Output() selectedMovieData = new EventEmitter();

  constructor(private movies : MovieService) { }

  ngOnInit(): void {

    this.movies$ = this.movies.getMovies();
  }

  selectMovie(movie: Movie){
    this.selectedMovieData.emit(movie);
  }
}
