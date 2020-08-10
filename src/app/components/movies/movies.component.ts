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


  constructor(private movieService: MovieService, private router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.language = 'en';

    this.getMovies();

  }
  getMovies() {

    this.movies = this.movieService.getMovies();

    //console.log(this.movies);

  }

  processResult() {
    return data => { this.movies = data };
  }

}
