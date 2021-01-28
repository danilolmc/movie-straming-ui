import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
import {faStar, faPlay} from "@fortawesome/free-solid-svg-icons";
import { Movie } from 'src/app/core/Movie';

@Component({
  selector: 'app-movie-informations',
  templateUrl: './movie-informations.component.html',
  styleUrls: ['./movie-informations.component.css']
})
export class MovieInformationsComponent implements OnInit {

  ratingStar = faStar;
  playIcon = faPlay;

  @Input() movie !: Movie;

  constructor(private movies : MovieService) { }

  ngOnInit(): void {

    this.movies.getMovies().subscribe(m => console.log(this.movies))

    this.movies.removeAndReturnMovies().subscribe(m => console.log(this.movies))

  }

}
