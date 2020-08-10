import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[];
  language: string;
  sort: number;
  private url = "https://api.themoviedb.org/3/movie/popular";

  private api_key = "7999d12156215ef54a9ab9fe0635d2dc";



  constructor(private moviesService: MovieService, private router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.language = 'en';

    this.getMovies();

  }
  getMovies() {
    this.moviesService.getMovies().subscribe(
      movie => this.movies = movie)

    // this.movies = this.http.get<GetResponseProducts>(`${this.url}?api_key=${this.api_key}`).pipe(map(
    //   response => response.results.movie));



  }

}
interface GetResponseProducts {

  "page": number,
  "total_results": number,
  "total_pages": number,
  results: {
    movie: Movie[];
  }
}
