import { Movie } from '../core/Movie';
import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {
      posterUrl: "https://www.movieartarena.com/imgs/boltff.jpg",
      name: "Bolt",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 3
    },
    {
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgP_75JeXrREWITYkPGDtmBjz-SKbZ4BsJyA&usqp=CAU",
      name: "Star Wars",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 4
    },
    {
      posterUrl: "https://i.pinimg.com/originals/6b/bb/63/6bbb63ac4f493ca14e2f1dc5f53cce5a.jpg",
      name: "After Earth",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 4
    },
    {
      posterUrl: "https://img.elo7.com.br/product/zoom/267719C/big-poster-filme-iron-man-2008-lo02-tamanho-90x60-cm-iron-man.jpg",
      name: "IRON MAN",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 5
    },
    {
      posterUrl: "https://yesimadesigner.com/wp-content/uploads/2018/06/4.jpg?x29684&x29684&x29684",
      name: "Avangers",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 5
    },
    {
      posterUrl: "https://m.media-amazon.com/images/I/71QiOu1+ceL._AC_SY879_.jpg",
      name: "Civil War",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 5
    },
    {
      posterUrl: "https://images-na.ssl-images-amazon.com/images/I/910soneEtvL._AC_SL1500_.jpg",
      name: "GodZilla",
      description: " having spent his entire life on the set of a television series, thinks that he has super powers. When he believes that his human owner, Penny, has been kidnapped, he sets out on a cross-country journey to \"rescue\" her.",
      rating: 5
    },
  ]

  getMovies(): Observable<Movie[]> {

    return of(this.movies);
  }

  removeAndReturnMovies(): Observable<Movie[]>{

    const newListOfMovies = this.movies.splice(-1);

    return of(newListOfMovies);
  }

}
