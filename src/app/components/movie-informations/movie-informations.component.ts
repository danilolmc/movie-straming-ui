import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import {faStar, faPlay} from "@fortawesome/free-solid-svg-icons";
import { Movie } from 'src/app/core/Movie';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ManageMovieVisibilityService } from 'src/app/services/manage-trailer-visibility.service';

@Component({
  selector: 'app-movie-informations',
  templateUrl: './movie-informations.component.html',
  styleUrls: ['./movie-informations.component.css'],
  animations: [
    trigger('showHideFooter', [
      state('isHidden', style({
        opacity: 0,
        transform: 'translateY(10vh)',
        marginTop: "-10vh",
        pointerEvents: 'none',

      })),

      state('isShown', style({
        opacity: 1,
        transform: 'translate(0vw,-2vh)',
        pointerEvents: 'all',
        marginBottom: '-2.5vh'
      })),

      transition('isHidden=>isShown', animate('.5s ease')),
      transition('isShown=>isHidden', animate('.5s ease'))
    ])
  ]
})
export class MovieInformationsComponent implements OnInit {

  ratingStar = faStar;
  playIcon = faPlay;

  @Output() openModal =  new EventEmitter();

  @Input() movie !: Movie;

  constructor(private movies : MovieService, private modalService : ManageMovieVisibilityService) { }

  ngOnInit(): void {

    this.movies.getMovies().subscribe(m => console.log(this.movies))

  }

  getStarsNumber(rating : number) : Array<string>{

    return Array(rating).fill("");
  }

  getCustomStyle(index : number, rating: number){

      return (index + 1) > rating ? 'standardStyle' : 'fullyellow';
  }

   playVideo(){
     this.modalService.seeVideo(true, this.movie.trailerurl);
   }

}
