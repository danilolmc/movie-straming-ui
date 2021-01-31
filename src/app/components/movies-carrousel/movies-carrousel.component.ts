import { Component, OnInit ,ViewChild, ElementRef, Output, EventEmitter, Renderer2} from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/Movie';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import  {faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movies-carrousel',
  templateUrl: './movies-carrousel.component.html',
  styleUrls: ['./movies-carrousel.component.css'],
  animations: [
    trigger('listFilmAnimation', [

      transition("* => *" ,[
        query(":enter", [
          style({opacity:0, transform: 'translate(-4px,75px)'}),
          stagger(100,
            animate('1.2s  ease', style({opacity:1,transform: 'translate(-4px,0px)'})))
        ])
      ])
    ])
  ]
})
export class MoviesCarrouselComponent implements OnInit {

  movies$ ?: Observable<Movie[]>;

  arrowRight = faAngleRight;

  arrowLeft = faAngleLeft;

  @Output() selectedMovieData = new EventEmitter();

  @ViewChild('carrousel') carrousel !:  ElementRef<HTMLDivElement>;

  constructor(private movies : MovieService,private render : Renderer2 ) { }

  ngOnInit(): void {

    this.movies$ = this.movies.getMovies();
  }

  selectMovie(movie: Movie){
    this.selectedMovieData.emit(movie);
    this.render.setStyle(this.carrousel.nativeElement, 'margin-top', '-13vh');
  }

  scroolRight(){
     this.carrousel.nativeElement.scrollBy(420,0)
  }

  scroolLeft(){
     this.carrousel.nativeElement.scrollBy(-420,0)
   }
}


