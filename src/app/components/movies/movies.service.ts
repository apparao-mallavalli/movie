//import {catch} from 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    private url = 'https://api.themoviedb.org/3/movie/';
    private searchUrl = 'https://api.themoviedb.org/3/search/movie';
    private apiKey = '7999d12156215ef54a9ab9fe0635d2dc';
    private language;

    constructor(private http: HttpClient) {
        if (localStorage.getItem('lang') == 'pl') this.language = 'pl';
        else this.language = 'en';

        this.getMovies();
    }

    getMovies() {
        // let moviesUrl = `${this.url}popular?api_key=${this.apiKey}`;
        let moviesUrl = 'https://api.themoviedb.org/3/movie/550?api_key=7999d12156215ef54a9ab9fe0635d2dc';


        return this.http.get<Movie[]>(moviesUrl);


    }

    searchMovies(query: string) {
        let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&language=${this.language}&query=${query}`;

        return this.http.get(searchUrl).pipe(map((res: Response) => { return res.json() }));
    }



    changeLanguage(lang: string) {
        localStorage.setItem('lang', lang);
        this.language = lang;
    }

    getLanguage() {
        return this.language;
    }



}