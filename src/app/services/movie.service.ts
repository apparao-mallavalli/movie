import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../components/movies/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = "https://api.themoviedb.org/3/movie/popular";

  private api_key = "7999d12156215ef54a9ab9fe0635d2dc";
  movies: Movie[];


  constructor(private httpClient: HttpClient) { }


  getMovies(): Movie[] {

    // need to build URL based on product id


    this.httpClient.get<GetResponseProducts>(`${this.url}?api_key=${this.api_key}`).pipe(map(
      response => this.movies = response.results.movie));

    console.log(this.movies);
    return this.movies;

  }
}

interface GetResponseProducts {
  "page": number,
  "total_results": number,
  "total_pages": number,
  "results": {
    movie: Movie[];
  }
}






