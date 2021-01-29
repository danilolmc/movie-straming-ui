import { Component, OnInit, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/Movie';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-movies-carrousel',
  templateUrl: './movies-carrousel.component.html',
  styleUrls: ['./movies-carrousel.component.css'],
  animations: [
    trigger('listFilmAnimation', [

      transition("* => *" ,[
        query(":enter", [
          style({opacity:0, transform: 'translateX(50px)'}),
          stagger(50,
            animate('1.2s ease', style({opacity:1,transform: 'translateX(-4px)'})))
        ])
      ])
    ])
  ]
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
