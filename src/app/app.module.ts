import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//import { SearchComponent } from './components/search/search.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './components/movies/movies.service';


const routes: Routes = [

  
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '**', component: MoviesComponent }
]
@NgModule({
  declarations: [
    AppComponent,

   
    BookmarksComponent,
    MoviesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
