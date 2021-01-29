import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import {faStar, faPlay} from "@fortawesome/free-solid-svg-icons";
import { Movie } from 'src/app/core/Movie';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-movie-informations',
  templateUrl: './movie-informations.component.html',
  styleUrls: ['./movie-informations.component.css'],
  animations: [
    trigger('showHideFooter', [
      state('isHidden', style({
        opacity: 0,
        transform: 'translateY(10vh)',
        pointerEvents: 'none',

      })),

      state('isShown', style({
        opacity: 1,
        transform: 'translateY(3vw,2vh)',
        pointerEvents: 'all',
        marginBottom: '0%'
      })),

      transition('isHidden=>isShown', animate('.5s ease')),
      transition('isShown=>isHidden', animate('.5s ease'))
    ])
  ]
})
export class MovieInformationsComponent implements OnInit,OnChanges {

  ratingStar = faStar;
  playIcon = faPlay;

  @Input() movie !: Movie;

  footerMovieStatus = 'isHidden';

  constructor(private movies : MovieService) { }

  ngOnChanges() {

    this.footerMovieStatus = this.movie ? 'isShown' : 'isHidden';
  }

  ngOnInit(): void {

    this.movies.getMovies().subscribe(m => console.log(this.movies))

  }

  getStarsNumber(rating : number) : Array<string>{

    return Array(rating).fill("");
  }

  getCustomStyle(index : number, rating: number){

      return (index + 1) > rating ? 'standardStyle' : 'fullyellow';
  }

}
